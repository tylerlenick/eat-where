import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { Map } from './Map';
import { Restaurant } from './Restaurant';

export const Body = () => {
    const [coordinates, setCoordinates] = useState({
        longitude: 0,
        latitude: 0
    });
    //const [longitude, setLongitude] = useState(0);

    /*useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                setLatitude(position.coords.latitude);
                setLongitude(position.coords.longitude);
            });
        }
    }, [latitude, longitude]);*/

    const getCoordinates = useCallback(function callback() {
        navigator.geolocation.watchPosition(function(position) {
            setCoordinates({
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            });
        })

        axios.get('/yelp', {
            params: {
                longitude: coordinates.longitude,
                latitude: coordinates.latitude
            }
        }).then(function (response) {
            console.log(response);
        });

    }, [])

    return (
        <div>
            <Map longitude={coordinates.longitude} latitude={coordinates.latitude}/> 
            <Restaurant longitude={coordinates.longitude} latitude={coordinates.latitude}/>
            <button onClick={getCoordinates} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Hey</button>
        </div>
    )
}
