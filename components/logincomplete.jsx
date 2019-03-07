// -------------------------------------
//          COMPLETE LOGIN
// -------------------------------------

{
  /* <DatetimeComp
name="dob"
field="dob"
setFieldValue={setFieldValue}
input={{
  initValue: values.dob,
  momentlang: accountTypeLocale.lang,
  onChange: this.handleDoB
}}
/>
<LocationComp
style={fieldStyle}
type="input"
name="birthLocation"
locn={this.state.localeLocn.location}
placeholder={inpValuesI18N.lob}
/>
<LocationComp
style={fieldStyle}
type="input"
name="currLocation"
locn={this.state.localeLocn.location}
placeholder={inpValuesI18N.locn}
/> */
}

  // Wait for browser to do its stuff...
  componentDidMount() {
    //... Load I18N strings in TopLevelApp

    // *** This will be part of the cookie/geolocn function
    // Check we can geolocate
    if (!navigator.geolocation) {
      alert(errorMsgs.geolocFail);
      return;
    }

    // Get locale stuff, get current location (on request)
    //... Get the curr posn. [Default timeout is infinity!  maxAge, where you were last (mobile)]
    // Nota Bene: Read cookie first
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          localeLocn: {
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }
          }
        });
        console.log("1..> %o", this.state);
      },
      error => {
        /// Should warn user
        console.warn(`ERROR(${error.code}): ${error.message}`);
      },
      {
        maximumAge: 10000,
        timeout: 5000
      }
    );
  }



  // Location & locale
  getCurrLocation = newLocation => {
    this.setState({ localeLocn: { location: newLocation } });
  };


  getLocale = newLocale => {
    this.setState({ localeLocn: { localeChosen: newLocale } });
  };

  // Language/locale stuff
  handleLocaleChoice(option) {
    console.log("Locale pref.:", option.label);
    //this.setState({ localeChosen: option });
  }


  // Dates stuff
  handleDoB = (field, value, setFieldValue) => {
    setFieldValue(field, value);
    // console.log("DoB: ", value);
  };

  state = {
    showModal: false,
    date: new Date(),
    localeLocn: {
      localeChosen: "en-US",
      location: { latitude: 0.0, longitude: 0.0 }
    }
  };

  // Default locale and location
const localeLocn = {
  localeChosen: "en-US",
  location: { longitude: 0.0, latitude: 0.0 }
};
