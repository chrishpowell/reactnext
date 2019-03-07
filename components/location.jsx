// -------------------------------------
//           LOCATION
// -------------------------------------
// Formik
import { Field } from "formik";
// Modal
import Modal from "react-modal";
// Map
import MapGL, { NavigationControl, Marker } from "react-map-gl";
// Mapbox styles
import "mapbox-gl/dist/mapbox-gl.css";
// I18N form values to be loaded  *** French
import { formValuesI18N } from "../config/i18n/I18Nlogreg-FR";

//
// - Mapbox token
const MAPBOX = "mapbox://styles/rubberbaron/cjrns1fhs4ol62smsdthgk98m";
const TOKEN =
  "pk.eyJ1IjoicnViYmVyYmFyb24iLCJhIjoiY2pyam5mZm5jMGQ1dDQzcXVkNThuY3c1eSJ9.JPcSvcCBPPJWg3EITtk8jg";

// Navigation control
const navStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

// Modal styles
// Replace: fontFamily: ["Open Sans", "Roboto", "Arial"].join(",")
const customModalStyles = {
  content: {
    backgroundColor: "#FFFFE0",
    fontSize: 14,
    top: "2%",
    right: "5%",
    bottom: "auto",
    left: "auto",
    fontFamily: ["Roboto", "Arial"].join(",")
  }
};

// ---------------------------
//        M A I N
// ---------------------------
class LocationComp extends React.Component {
  state = {
    viewport: {
      latitude: 0.0,
      longitude: 0.0,
      zoom: 12.0,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
    },
    showModal: false,
    locnValue: ""
  };

  // *** React says NOT to do this but only way to set initial state correctly... (@TODO fix?)
  // Called six! times for some reason...
  componentWillReceiveProps = theseProps => {
    this.setState({
      viewport: {
        latitude: theseProps.locn.latitude,
        longitude: theseProps.locn.longitude,
        zoom: 12.0,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500
      },
      locnValue:
        this.props.placeholder +
        "[" +
        parseFloat(theseProps.locn.latitude).toFixed(2) +
        "," +
        parseFloat(theseProps.locn.longitude).toFixed(2) +
        "]"
    });
    console.log("..> theseProps: %o", theseProps);
  };

  // Modal stuff
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  // drawPOI = ({ project }, lat, lon) => {
  //   const [cx, cy] = project([lon, lat]);
  //   return <circle cx={cx} cy={cy} r={4} fill="blue" />;
  // };
  // Mouse drag start
  locnDragStart = event => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      },
      locnValue:
        this.props.placeholder +
        "[" +
        parseFloat(event.lngLat[1]).toFixed(2) +
        "," +
        parseFloat(event.lngLat[0]).toFixed(2) +
        "]"
    });
  };
  // Mouse drag posn
  locnDrag = event => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      },
      locnValue:
        this.props.placeholder +
        "[" +
        parseFloat(event.lngLat[1]).toFixed(2) +
        "," +
        parseFloat(event.lngLat[0]).toFixed(2) +
        "]"
    });
  };
  // Mouse drag end
  locnDragEnd = event => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        longitude: event.lngLat[0],
        latitude: event.lngLat[1]
      },
      locnValue:
        this.props.placeholder +
        "[" +
        parseFloat(event.lngLat[1]).toFixed(2) +
        "," +
        parseFloat(event.lngLat[0]).toFixed(2) +
        "]"
    });
  };

  render() {
    const { viewport } = this.state;

    return (
      <>
        <Field
          type="input"
          name={this.props.name}
          value={this.state.locnValue}
          placeholder={this.props.placeholder}
          onChange={e => this.setState({ locnValue: e.target.value })}
        />
        <button onClick={this.handleOpenModal} className="mapButton">
          {formValuesI18N.buttonText}
        </button>
        <Modal
          isOpen={this.state.showModal}
          style={customModalStyles}
          contentLabel="UserMap"
        >
          <section>
            <MapGL
              {...viewport}
              mapStyle={MAPBOX}
              mapboxApiAccessToken={TOKEN}
              onViewportChange={viewport => this.setState({ viewport })}
            >
              <Marker
                className="mapboxgl-marker-icon"
                latitude={viewport.latitude}
                longitude={viewport.longitude}
                draggable={true}
                onDragStart={this.locnDragStart}
                onDrag={this.locnDrag}
                ondragEnd={this.locnDragEnd}
              >
                <div
                  style={{
                    marginLeft: 20,
                    width: 100,
                    fontStyle: "italic"
                  }}
                >
                  {formValuesI18N.locnText}
                </div>
              </Marker>
              <div className="nav" style={navStyle}>
                <NavigationControl />
              </div>
            </MapGL>
          </section>
          <section style={{ margin: "15px auto 0 100px" }}>
            <button
              type="button"
              style={{ width: 300 }}
              onClick={this.handleCloseModal}
              className="mapButton"
            >
              {formValuesI18N.closeButton}
            </button>
          </section>
        </Modal>

        <style jsx="true">{`
          .mapButton {
            width: 100px;
            height: 25px;
            font-size: 12px;
            border-radius: 2px;
            color: black;
            border: 1px solid black;
            margin: auto;
            outline: none;
            background: #90ee90;
          }
          button:hover {
            background: #ffa07a;
            border-color: darkgray;
          }
          .mapboxgl-marker-icon {
            width: 15px;
            height: 15px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid #90ee90;
            background-image: radial-gradient(#641e16, #e74c3c, #fadbd8);
          }
        `}</style>
      </>
    );
  }
}

export default LocationComp;
