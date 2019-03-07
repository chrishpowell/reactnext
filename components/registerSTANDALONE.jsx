// -------------------------------------
//           REGISTRATION
// -------------------------------------
// Predikt font
// import "typeface-open-sans";
// Formik
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
// Modal
import Modal from "react-modal";
// Dropdown
import Select from "react-select";
// Datetime (DoB)
import DatetimeComp from "./datetimecomp";
// Location
import LocationComp from "./location";
// Lat, Lon
//import GetCurrLocation from "./geolocation";
// Validation
import * as yup from "yup";
// RegEx
import XRegExp from "xregexp";
// Styles
import styles, { button, body } from "../styles/global1";
// CSS 'reset'
import "../styles/normalize.css";
// I18N stuff... to be loaded from cache
import {
  accountTypeLocale,
  formValuesI18N,
  inpValuesI18N,
  accountTypeList,
  errorMsgs
} from "../config/i18n/I18Nlogreg-FR";
import { localeTags } from "../config/i18n/I18NLangLists";

//
// --------------------------- [Styles] --------------------------------------
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

// Can't get <Field/> to work with styled-JSX!
const fieldStyle = {
  width: "93%",
  height: 20,
  margin: "0 1px 2px 1px"
};
const fieldStyle1 = {
  width: "93%",
  height: 20,
  margin: "3px 1px 2px 1px"
};

// Locale (dropdown) styling
const localeStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "white",
    marginTop: 0,
    height: 25,
    minHeight: 25,
    width: 275,
    fontSize: 12
  })
};
// --------------------------- [Styles end] ----------------------------------

// --------------------------- [Init and defaults] ---------------------------
// Default locale and location
const localeLocn = {
  localeChosen: "en-US",
  location: { longitude: 0.0, latitude: 0.0 }
};

// Default language
const defaultLocaleOption = localeTags[0].items[0];

// Determine default radio button
const accountTypeChkdId = accountTypeList[0].id;

// Form(ik) input fields initial values
const inpValues = {
  familyname: "",
  othername: "",
  email: "",
  password: "",
  password2: "",
  dob: new Date("January 1, 2000 00:00:00"),
  birthLocation: { lat: 0.0, lon: 0.0, citytown: "", country: "" },
  currLocation: { lat: 0.0, lon: 0.0, citytown: "", country: "" },
  locale: {},
  accountType: defaultLocaleOption,
  userPrefLang: accountTypeLocale.locale
};
// --------------------------- [Init and defaults end] -----------------------

// --------------------------- [Validation] ----------------------------------
const validUserAcctSchema = yup.object().shape({
  familyname: yup
    .string()
    .matches(reUsername)
    .required(errorMsgs.userNameIsReqd),
  othername: yup.string().matches(reUsername),
  email: yup
    .string()
    .email(errorMsgs.emailReqd)
    .required(errorMsgs.emailReqd),
  password: yup
    .string()
    .min(6, errorMsgs.pwdInvalid)
    .required(errorMsgs.pwdRequired),
  password2: yup.string().oneOf([yup.ref("password")], errorMsgs.pwdNotSame)
  // dob: yup.date().default(() => {
  //   new Date("January 1, 2000 00:00:00");
  //})
});
// --------------------------- [Validation end] ------------------------------

// Regex username check for this locale
const reUsername = new XRegExp(accountTypeLocale.regex);

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#registration");

//
//
//... ===========================================================================
//...     M A I N
//... ===========================================================================
class RegistrationApp extends React.Component {
  state = {
    showModal: false,
    date: new Date(),
    localeLocn: {
      localeChosen: "en-US",
      location: { latitude: 0.0, longitude: 0.0 }
    }
  };

  // Modal stuff
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

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

  //... Ok, let's get on with it
  render() {
    return (
      <div>
        <style jsx="true">{button}</style>
        {/* Logo - to go... */}
        <div
          style={{
            height: 55,
            backgroundSize: "32px 50px",
            backgroundImage: "url(/static/discoveri.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "white"
          }}
        />
        <button
          type="button"
          style={{ width: "100%", height: "100%" }}
          onClick={this.handleOpenModal}
        >
          Trigger Modal
        </button>

        {/* Here's where things really start... */}
        <Modal
          isOpen={this.state.showModal}
          style={customModalStyles}
          contentLabel="Registration"
        >
          <h2 align="center" className="regTitle">
            {formValuesI18N.mainTitle}
          </h2>
          <section className="closeregardless">
            <button
              type="button"
              className="closeButton"
              onClick={this.handleCloseModal}
            >
              {formValuesI18N.closeButton}
            </button>
          </section>
          <Formik
            initialValues={inpValues}
            // Validation
            validationSchema={validUserAcctSchema}
            //... 'Submit' and fake server delay [zeroMQ]
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);

              this.handleCloseModal;
            }}
          >
            {({
              values,
              errors,
              isSubmitting,
              handleSubmit,
              setFieldValue
            }) => (
              <Form onSubmit={handleSubmit}>
                <table style={{ marginBottom: 4 }}>
                  <thead>
                    <tr>
                      <th>
                        <h3>{formValuesI18N.acctDetails}</h3>
                      </th>
                      <th>
                        <h3>{formValuesI18N.acctTypes}</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: 300 }}>
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="familyname"
                          placeholder={inpValuesI18N.familyname}
                        />
                        <ErrorMessage name="familyname" component="div" />
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="othername"
                          placeholder={inpValuesI18N.othername}
                        />
                        <ErrorMessage name="othername" component="div" />
                        <Field
                          style={fieldStyle}
                          type="email"
                          name="email"
                          placeholder={inpValuesI18N.email}
                        />
                        <ErrorMessage name="email" component="div" />
                        <Field
                          style={fieldStyle}
                          type="password"
                          name="password"
                          placeholder={inpValuesI18N.password}
                        />
                        <ErrorMessage name="password" component="div" />
                        <Field
                          style={fieldStyle}
                          type="password"
                          name="password2"
                          placeholder={inpValuesI18N.password2}
                        />
                        <ErrorMessage name="password2" component="div" />
                        <section
                          style={{ height: 15, marginBottom: 1, fontSize: 12 }}
                        >
                          {formValuesI18N.prefLangChoose}
                        </section>
                        <section>
                          <Select
                            name="locale"
                            styles={localeStyles}
                            instanceId="locale"
                            options={localeTags[0].items}
                            defaultValue={defaultLocaleOption}
                            onChange={ev => {
                              values.locale = ev;
                            }}
                          />
                        </section>
                      </td>
                      <td style={{ width: 600 }}>
                        <section>
                          <FieldArray
                            name="accountType"
                            render={() => (
                              <>
                                {accountTypeList.map((accountType, index) => (
                                  <section
                                    className="radiobutton"
                                    key={accountType.id}
                                  >
                                    <input
                                      type="radio"
                                      name="accountType"
                                      style={{ marginLeft: 2 }}
                                      defaultChecked={
                                        accountType.id == accountTypeChkdId
                                      }
                                      onChange={e => {
                                        e.target.checked
                                          ? (values.accountType = accountType)
                                          : null;
                                      }}
                                    />
                                    &nbsp;
                                    <label
                                      className="label"
                                      htmlFor={accountType.id}
                                    >
                                      {accountType.desc}{" "}
                                      {new Intl.NumberFormat(
                                        accountTypeLocale.locale,
                                        accountTypeLocale.format
                                      ).format(accountTypeList[index].price) +
                                        " " +
                                        accountTypeLocale.perMonth +
                                        " " +
                                        (accountTypeList[index].perUser
                                          ? accountTypeLocale.perUser
                                          : "")}
                                    </label>
                                  </section>
                                ))}
                              </>
                            )}
                          />
                        </section>
                        <section className="famGrpMsg">
                          {formValuesI18N.famGrpTypesMsg}
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <section className="register">
                  <button
                    className="regButton"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {formValuesI18N.registerButton}
                  </button>
                  <section className="confMsg">
                    {formValuesI18N.confMsg}
                  </section>
                </section>
              </Form>
            )}
          </Formik>
        </Modal>

        <style jsx="true">{`
          section {
            background: #dcdcdc;
          }
          .regTitle {
            background: #ffffe0;
            margin: 0 auto 4px auto;
            width: 100%;
          }
          table {
            width: 95%;
            border: 1px solid darkgrey;
            padding: 2px;
            background: #ffffe0;
            margin: auto;
          }
          td {
            background: #dcdcdc;
          }
          th {
            background: #8cbc8f;
          }
          h3 {
            background: #8cbc8f;
          }
          .famGrpMsg {
            border: 1px solid darkgrey;
            padding: 1px;
            text-align: justify;
            text-justify: inter-word;
            background: #dcdcdc;
            margin: 8px auto;
            width: 95%;
            font-size: 11px;
          }
          .confMsg {
            padding: 0 3px 0 3px;
            text-align: justify;
            text-justify: inter-word;
            width: 395px;
            margin: 7px 2px 2px 0;
            font-size: 12px;
            font-weight: normal;
            background: #ffffe0;
          }
          .closeregardless {
            height: 25px;
            width: 325px;
            margin: auto auto 15px auto;
          }
          .closeButton {
            background: #90ee90;
          }
          .radiobutton {
            height: 30px;
            width: 95%;
            font-size: 12px;
            border: 1px solid darkgrey;
            background: white;
            display: flex;
            align-items: center;
            margin: auto auto 3px auto;
          }
          .label {
            width: 93%;
            background: white;
          }
          .stdinp {
            height: 25px;
            width: 100%;
            margin: 0 1px 3px 1px;
          }
          .locale {
            height: 25px;
          }
          .register {
            height: 70px;
            width: 400px;
            background: #ffffe0;
            border: 1px solid lightgrey;
            margin: 10px auto 0 auto;
          }
          .regButton {
            height: 25px;
            width: 325px;
            fontweight: 900;
            background: #90ee90;
            position: relative;
            margin-left: 40px;
            margin-top: 4px;
          }
        `}</style>
      </div>
    );
  }
}

export default RegistrationApp;
