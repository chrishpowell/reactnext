
var longitude = 0.0,
  latitude = 0.0;

const GetLatLon = () => {

  componentDidMount(){;};

  if (!navigator.geolocation) {
    return <h2>Geolocation is not supported by your browser</h2>;
  }

  navigator.geolocation.getCurrentPosition(position => {
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;
  });

  return (
    <h2>
      Latitude is: {latitude}, Longitude is: {longitude}
    </h2>
  );
};

export default GetLatLon;
