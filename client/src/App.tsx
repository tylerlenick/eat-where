import { Navbar } from './components/Navbar';
import { Body } from './components/Body';
import { useState, useEffect } from 'react';

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);


  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Body longitude={longitude} latitude={latitude}/>
    </div>
  );
}

export default App;
