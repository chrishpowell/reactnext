/*
 * Location
 */
// Formik
import { Field } from "formik";
// Modal
import Modal from "react-modal";
// Map
import MapGL, { NavigationControl } from "react-map-gl";
// Styles
import { button } from "../styles/global1";

const TOKEN =
  "pk.eyJ1IjoicnViYmVyYmFyb24iLCJhIjoiY2pyam5mZm5jMGQ1dDQzcXVkNThuY3c1eSJ9.JPcSvcCBPPJWg3EITtk8jg";

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

const formValuesI18N = {
  mainTitle: "UserMap",
  closeButton: "Close and update Lat/Lon coords"
};

class LocationComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 56.946251,
        longitude: 24.10425,
        zoom: 12.0,
        bearing: 0,
        pitch: 0,
        width: 500,
        height: 500
      },
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    //this.handleLocaleChoice = this.handleLocaleChoice.bind(this);
  }

  // Modal stuff
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { viewport } = this.state;
    return (
      <>
        <Field
          type="input"
          name={this.props.name}
          value={this.props.placeholder}
        />
        <button
          onClick={this.handleOpenModal}
          style={{
            width: 100,
            height: 25,
            fontSize: 12,
            backgroundColor: "lightyellow"
          }}
        >
          Show Map
        </button>
        <Modal
          isOpen={this.state.showModal}
          style={customModalStyles}
          contentLabel="UserMap"
        >
          <section>
            <MapGL
              {...viewport}
              mapStyle="mapbox://styles/rubberbaron/cjrns1fhs4ol62smsdthgk98m"
              mapboxApiAccessToken={TOKEN}
            >
              <div className="nav" style={navStyle}>
                <NavigationControl />
              </div>
            </MapGL>
          </section>
          <section style={{ margin: "15px auto 5px auto" }}>
            <button
              type="button"
              onClick={this.handleCloseModal}
              style={{
                width: 300,
                height: 25,
                fontSize: 12,
                backgroundColor: "#90ee90"
              }}
            >
              {formValuesI18N.closeButton}
            </button>
          </section>
        </Modal>

        <style jsx="true">{`
          button {
            width: 100%;
            height: 100%;
            border-radius: 2px;
            color: black;
            border: 1px solid black;
            margin: 0;
            outline: none;
            background: white;
          }
          ,
          button:hover {
            background: #ffa07a;
            border-color: darkgray;
          }
        `}</style>
      </>
    );
  }
}

export default LocationComp;
