import UsersMapHead from "./usersmaphead";

class Mapper extends React.Component {
  initMapView(latitude, longitude) {
    const userMap = L.map("usermapid").setView([latitude, longitude], 13);
    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoicnViYmVyYmFyb24iLCJhIjoiY2pyam5mZm5jMGQ1dDQzcXVkNThuY3c1eSJ9.JPcSvcCBPPJWg3EITtk8jg"
      }
    ).addTo(userMap);
  }

  componentDidMount() {
    this.initMapView(51.505, -0.09);
  }

  render() {
    return (
      <>
        <UsersMapHead />
        <h2>Going to Map</h2>
        <div id="usermapid" style={{ height: 180 }} />
      </>
    );
  }
}

export default Mapper;
