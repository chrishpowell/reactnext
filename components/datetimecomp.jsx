import React from "react";
import PropTypes from "prop-types";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
// Moment stuff
import moment from "moment";
// Set the locale/lang (mixed up in moment)
import "moment/locale/fr";
import "moment/locale/zh-cn";

//
//--------------------------------
//    M A I N
//--------------------------------
class DatetimeComp extends React.Component {
  // Set the date
  handleChange = value => {
    this.props.input.onChange(
      this.props.field,
      value,
      this.props.setFieldValue
    );
  };

  // Field touched on submit
  // handleBlur = () => {
  //   this.props.input.onBlur(this.props.field, true);
  // };

  //...Some styling (but needs more)
  renderDay = (props, currentDate) => {
    return (
      <td
        {...props}
        style={{
          background: "lightyellow",
          cursor: "pointer",
          fontFamily: "Arial",
          fontSize: 13
        }}
      >
        {currentDate.date()}
      </td>
    );
  };

  renderMonth = (props, month, year, selectedDate) => {
    return (
      <td {...props} style={{ fontFamily: "Arial", fontSize: 13 }}>
        {month}
      </td>
    );
  };

  renderYear = (props, year, selectedDate) => {
    return (
      <td {...props} style={{ fontFamily: "Arial", fontSize: 13 }}>
        {year}
      </td>
    );
  };

  render() {
    const { input, field, ...rest } = this.props;

    return (
      <Datetime
        {...rest}
        renderDay={this.renderDay}
        renderMonth={this.renderMonth}
        renderYear={this.renderYear}
        onChange={this.handleChange}
        value={input.initValue}
        locale={input.momentlang}
      />
    );
  }
}

DatetimeComp.propTypes = {
  field: PropTypes.string.isRequired,
  locale: PropTypes.string.isrequired,
  input: PropTypes.shape({
    initValue: PropTypes.instanceOf(Date),
    onChange: PropTypes.func.isRequired, // setFieldValue
    momentlang: PropTypes.string.isRequired
    //onBlur: PropTypes.func.isRequired // setFieldTouched [will be done on submit]
  }).isRequired
};

export default DatetimeComp;
