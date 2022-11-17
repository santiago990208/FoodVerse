/* Network AFRAME */
      THREE.Math = THREE.MathUtils;
    
    
        AFRAME.registerComponent('spawn-in-circle', {
          schema: {
            radius: {type: 'number', default: 1}
          },
        
          init: function() {
            var el = this.el;
            var center = el.getAttribute('position');
        
            var angleRad = this.getRandomAngleInRadians();
            var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
            var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
            el.setAttribute('position', worldPoint);
        
            var angleDeg = angleRad * 180 / Math.PI;
            var angleToCenter = -1 * angleDeg + 90;
            var rotationStr = '0 ' + angleToCenter + ' 0';
            el.setAttribute('rotation', rotationStr);
          },
        
          getRandomAngleInRadians: function() {
            return Math.random()*Math.PI*2;
          },
        
          randomPointOnCircle: function (radius, angleRad) {
            x = Math.cos(angleRad)*radius;
            y = Math.sin(angleRad)*radius;
            return {x: x, y: y};
          }
        });
    
    
      // Temporary workaround for template declaration; see issue 167
      NAF.schemas.getComponentsOriginal = NAF.schemas.getComponents;
      NAF.schemas.getComponents = (template) => {
        if (!NAF.schemas.hasTemplate('#head-template')) {
          NAF.schemas.add({
            template: '#head-template',
            components: [
              'position',
              'rotation',

              // In this example, we don't sync the material.color itself, like the basic example;
              // we instead sync player-info, which includes color setting + updating.
              // (you can see an example of the other pattern in the basic.html demo)
              'player-info'
            ]
          });
        }

        const components = NAF.schemas.getComponentsOriginal(template);
        return components;
      };
    
    
      window.ntExample = {
        randomColor: () => {
          return '#' + new THREE.Color(Math.random(), Math.random(), Math.random()).getHexString();
        }
      };

      AFRAME.registerComponent('player-info', {
        // notice that color and name are both listed in the schema; NAF will only keep
        // properties declared in the schema in sync.
        schema: {
          name: { type: 'string', default: 'user-' + Math.round(Math.random() * 10000) },
          color: {
            type: 'color', // btw: color is just a string under the hood in A-Frame
            default: window.ntExample.randomColor()
          }
        },

        init: function () {
          this.head = this.el.querySelector('.head');
          this.nametag = this.el.querySelector('.nametag');

          this.ownedByLocalUser = this.el.id === 'player';
          if (this.ownedByLocalUser) {
            // populate the html overlay with the correct name on init
            this.nametagInput = document.getElementById('username-overlay');
            this.nametagInput.value = this.data.name;

            // add the initial color to the html overlay color picker button
            document.querySelector('button').style.backgroundColor = this.data.color;
            document.querySelector('button').style.color = this.data.color;
          }
        },

        // here as an example, not used in current demo. Could build a user list, expanding on this.
        listUsers: function () {
          console.log(
            'userlist',
            [...document.querySelectorAll('[player-info]')].map((el) => el.components['player-info'].data.name)
          );
        },

        newRandomColor: function () {
          this.el.setAttribute('player-info', 'color', window.ntExample.randomColor());
        },

        update: function () {
          if (this.head) this.head.setAttribute('material', 'color', this.data.color);
          if (this.nametag) this.nametag.setAttribute('value', this.data.name);
        }
      });
    