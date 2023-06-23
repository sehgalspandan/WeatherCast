import { useState, useEffect } from 'react';

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject('Geolocation is not supported by this browser.');
    }
  });
};

const FetchWeather = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    getLocation()
      .then((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

//   return (
//     <div>
//       {location ? (
//         <p>
//           Your current location is: {location.latitude}, {location.longitude}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=dc1d6a6ef2fd65bbfe45f9011d3e23c3`).catch((
//     error) => {
//         console.error(error);
//         });
        
//         //log the data
//         console.log(data);

};


export default FetchWeather;