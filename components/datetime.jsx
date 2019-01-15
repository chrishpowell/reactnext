/*
 * Datetime
 */
// Formik
import { Field } from "formik";
// Datetime picked
import DateTimePicker from "./datetimepicker";

class DatetimeComp extends React.Component {
  render() {
    // Validation...
    //dtFormat = { this.props.dateFormat };

    return (
      <Field
        className={{ height: "100%" }}
        type="input"
        name="datetime"
        id={this.props.dtId}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default DatetimeComp;
