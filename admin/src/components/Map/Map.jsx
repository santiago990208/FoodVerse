import "./map.css"

import { GoogleMap, useLoadScript, HeatmapLayer } from "@react-google-maps/api";

export default function Map({ title }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>
    return (
        <div className="map">
            <h3 className="mapTitle">{title}</h3>
            <MapLoaded></MapLoaded>
        </div>
    );

}

function MapLoaded() {
    return <GoogleMap zoom={12} center={{ lat: -18.4746, lng: -70.29792 }} mapContainerClassName="mapSize" >
        
    </GoogleMap>;

}