import GetLatLon from "./geolocation";

// const LocationContext = React.createContext({ longitude: 0.0, latitude: 0.0 });

class UserAccountState extends React.Component {
  state = {
    locale: "en-US",
    location: { longitude: 0.0, latitude: 0.0 }
  };

  getLatLon = newLocation => {
    this.setState({ location: newLocation });
  };
  getLocale = newLocale => {
    this.setState({ locale: newLocale });
  };

  render() {
    return (
      <>
        <GetLatLon getLatLon={this.getLatLon} />
        <h2>
          Latitude: {parseFloat(this.state.location.latitude).toFixed(4)},
          Longitude: {parseFloat(this.state.location.longitude).toFixed(4)}
        </h2>
      </>
    );
  }
}

export default UserAccountState;
