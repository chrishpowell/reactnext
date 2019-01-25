/*
 * Location
 */
// Formik
import { Field } from "formik";

class LocationComp extends React.Component {
  render() {
    return (
      <>
        <Field
          type="input"
          name={this.props.name}
          value={this.props.locn}
          placeholder={this.props.placeholder}
        />
        <button
          style={{
            width: 100,
            height: 25,
            fontSize: 12,
            backgroundColor: "lightyellow"
          }}
        >
          Show Map
        </button>
      </>
    );
  }
}

export default LocationComp;
