import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useState, useEffect, useCallback } from 'react';




export const Map = (longitude: any, latitude: any) => {
    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
    const center = {
        lat: 33.7707008,
        lng: -84.3841536
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_KEY"
      })
    
    const [map, setMap] = useState(null)
    
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])
    
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        </GoogleMap>
    ) : <></>
}
