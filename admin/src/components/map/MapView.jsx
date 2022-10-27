import Map from "./Map";
import "./map.css";

export default function MapView({title}) {
    const data = [
        { lat: -18.4746 , lng: -70.29792 },
        { lat: -19.4746 , lng: -80.29792 },
        { lat: -12.4746 , lng: -78.29792 },
        { lat: -12.4746 , lng: -82.29792 },
        { lat: -20.4746 , lng: -86.29792 },
        { lat: -19.4746 , lng: -86.29792 },
        { lat: -18.886 , lng: -106.29792 },
        
    ]
    return (
        <div className="map">
            <h3 className="mapTitle">{title}</h3>
            <Map data={data} center={{ lat: -18.4746 , lng: -70.29792 }} />
        </div>
    );
}