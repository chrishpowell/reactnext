import React from "react";

class GetCurrLocation extends React.Component {
  sendLatLon(newLocation) {
    {
      // newLocation: {latitude,longitude}
      this.props.getLatLon(newLocation);
    }
  }

  componentDidMount() {
    if (!navigator.geolocation) {
      alert(
        "Your browser does not support geolocation.  Manual entry will be required."
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(position => {
      this.sendLatLon({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }

  render() {
    return null;
  }
}

export default GetCurrLocation;
