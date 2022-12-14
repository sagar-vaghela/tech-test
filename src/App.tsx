import { Footer, Header } from './components';
import { useGeolocated } from 'react-geolocated';
import ShoppingRoutes from './routes';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    if (performance.navigation.type === 1) {
      // localStorage.removeItem('cartId');
    }
  });

  const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false
    },
    userDecisionTimeout: 5000
  });

  const renderGeoLocation = () =>
    !isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : coords != null ? (
      <div>
        You are at {coords.latitude}, {coords.longitude} (lat long).
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );

  return (
    <>
      <Header renderlocation={renderGeoLocation} />
      <ShoppingRoutes />
      <Footer />
    </>
  );
};
export default App;
