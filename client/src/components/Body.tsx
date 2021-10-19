import { useState, useEffect } from 'react';
import { Map } from './Map';
import { Restaurant } from './Restaurant';

export const Body = () => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
        }
    }, [latitude, longitude]);

    console.log("NEW", longitude, latitude);
    return (
        <div>
            <Map longitude={longitude} latitude={latitude}/> 
            <Restaurant/>
        </div>
    )
}
