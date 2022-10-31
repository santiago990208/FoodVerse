# FoodVerse

Deployment in OCI
## Connection with ssh in Windows PowerShell to OCI instance 

Open PowerShell with admin privilages
<key_path> = the path where you private key is located
<IP_address> = The public IP address for the instance.
```
$path = "<key_path>"
icacls.exe $path /reset
icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"
icacls.exe $path /inheritance:r
ssh -i $path opc@<IP_address>
```

## Configuration NGINX in OCI
<IP_address> = The public IP address for the instance.
```
## Check for packages updates before installing NGINX packages
sudo dnf update && sudo dnf upgrade

## Install the NGINX package
sudo dnf install -y nginx

## Enable and start the NGINX service, listens by default TCP port 80
sudo systemctl enable --now nginx.service

## Check status
sudo systemctl status nginx

## Configure firewall rules
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --reload
```
### Test your deployment
With your web browser, go to the domain name or IP address of the compute instance. This is the same IP address that you used to SSH into the instance.

http://<IP_address>/

The NGINX web server opens the default test page /usr/share/nginx/html/index.html

### Create a custom NGINX configuration
To change the root path for your web server, do not edit the /etc/nginx/nginx.conf file directly. Instead, as a preferred method, create a site-specific configuration in the /etc/nginx/conf.d directory. For example, create the file /etc/nginx/conf.d/default.conf and populate it with a configuration for your site.
```
## Create a directory to host a new site
sudo mkdir /srv/website

## Create index.html file
cat << EOF | sudo tee /srv/website/index.html
<html>
<head>
<title>Hello</title>
</head>
<body><p>Hello World!</p></body>
</html>
EOF

## Update the permissions
sudo chown -R nginx:nginx /srv/website
sudo chcon -Rt httpd_sys_content_t /srv/website

## Create custom NGINX conf
cat <<EOF | sudo tee /etc/nginx/conf.d/default.conf
server {
  server_name    <IP_address>;
  root           /srv/website;
  index          index.html;
}
EOF

## Restart the NGINX
sudo systemctl restart nginx

## For debug and view connection issues by tailing the log files
sudo tail -f /var/log/nginx/access.log -f /var/log/nginx/error.log
```

### Configure HTTPS
This is needed to use Aframe in VR/AR mode and have access to the devices sensors
### Configure your TLS/SSL certificates
Oracle strongly recommends using a TLS certificate that has been signed by an external Certificate Authority (CA).
See https://docs.oracle.com/en/operating-systems/oracle-linux/certmanage/ for more information.

For testing and dev you can use a self-signed certificate.
```
## Create a directory to store the keys and certificates for NGINX
sudo mkdir -p /etc/pki/nginx/private

##  To create the certificate and key
openssl req -new -x509 -days 30 -nodes -newkey rsa:2048 -keyout server.key -out server.crt -subj "/C=US/ST=Ca/L=Sunnydale/CN=<IP_address>"

##Copy the certificate to /etc/pki/nginx/server.crt and the key file to /etc/pki/nginx/private/server.key
sudo cp server.crt /etc/pki/nginx/
sudo cp server.key /etc/pki/nginx/private
```

### Update the NGINX conf
Replace the /etc/nginx/conf.d/default.conf file to include a configuration for a TLS enabled web site and include a 301 redirect for HTTP traffic to be referred to the HTTPS site.
```
cat <<'EOF' | sudo tee /etc/nginx/conf.d/default.conf
 server {
 server_name   <IP_address>;
 return 301 https://$host$request_uri;
}

server {
 listen       443 ssl http2;
 listen       [::]:443 ssl http2;
 server_name    <IP_address>;
 root           /srv/website;
 index          index.html;
 ssl_certificate "/etc/pki/nginx/server.crt";
 ssl_certificate_key "/etc/pki/nginx/private/server.key";
 ssl_session_cache shared:SSL:1m;
 ssl_session_timeout  10m;
 ssl_ciphers PROFILE=SYSTEM;
 ssl_prefer_server_ciphers on;
}
EOF

## Restart the NGINX
sudo systemctl restart nginx

## Configure firewall rules
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --reload
```

### Confirm that HTTPS is working correctly
Open a browser and navigate to http://<IP_address>/. The browser should redirect to https://<IP_address>/.

Most browsers display a security risk warning when accessing a site that uses a self-signed certificate. You can accept the risk warning in this case to confirm that the site is working as expected.

The warning is not displayed if you use a CA signed certificate.

## Deploy the project

Install git for cloning the repository
```
sudo dnf install git
```
Remove the dummy files
/srv/website
```
cd /srv/website/
sudo rm index.html
```
Clone our metaverse room from Github
(make sure to keep the “.” as we want to have the content of the repo in our folder)
```
sudo git clone https://github.com/oracle-devrel/devo-tron-metaverse-room.git .
```
check everthing is coorect connecting to:
https://<IP_address>/

## Libraries docs
Aframe: https://aframe.io/docs/0.8.0/introduction/