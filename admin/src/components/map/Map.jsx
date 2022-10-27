import React from "react";
import "./map.css";
import { Map, GoogleApiWrapper, HeatMap } from "google-maps-react";


class MapContainer extends React.Component {
    render() {
      const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)"
      ];
      return (
          <div className="map_container">
            <Map
            google={this.props.google}
            className={"map"}
            zoom={13}
            initialCenter={this.props.center}
            onReady={this.handleMapReady}
          >
            <HeatMap
              positions={this.props.data}
              opacity={1}
              radius={10}
            />
          </Map>
          </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: "AIzaSyDpG-NeL-XGYAduQul2JenVr86HIPITEso",
    libraries: ["visualization"]
  })(MapContainer);
  