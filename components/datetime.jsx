/*
 * Datetime
 */
// Formik
import { Field } from "formik";
// Datetime picked
import DateTimePicker from "./datetimepicker";

//onDateChange = date => this.setState({ date });

class DatetimeComp extends React.Component {
  render() {
    // Validation...
    //dtFormat = { this.props.dateFormat };

    return (
      <Field
        className={{ height: "100%" }}
        type="input"
        name="datetime"
        value="2000.01.01 00:00"
        id={this.props.dtId}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default DatetimeComp;
