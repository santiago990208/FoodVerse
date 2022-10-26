/* global google */
import "./map.css"
//import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript, HeatmapLayer } from "@react-google-maps/api";

export default function Map({ title }) {

    return (
        <div className="map">
            <h3 className="mapTitle">{title}</h3>
            <LoadScript
                googleMapsApiKey="AIzaSyAd9_yrW4nXtaDqzwQfQ9-W5elh-s9lt3w"
                libraries={["visualization"]}
            >
                <MapLoaded></MapLoaded>
            </LoadScript>
        </div>
    );

}

function MapLoaded() {
    return <GoogleMap zoom={12} center={{ lat: -18.4746, lng: -70.29792 }} mapContainerClassName="mapSize" >
        <HeatmapLayer
            data={
                new google.maps.LatLng(37.782, -122.447)
            }
        />
    </GoogleMap>;

}