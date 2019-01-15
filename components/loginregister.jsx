/*
 * Registration
 */
// *** Globally imported by webpack: react, render(react-dom), Formik, (TBD: react-emotion, normalize.css, typeface-open-sans)
// CSS 'reset'
//import 'normalize.css';
// Predikt font
// import "typeface-open-sans";
// Modal
import Modal from "react-modal";
// Dropdown
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
// Datetime (DoB)
import DatetimeComp from "../components/datetime";
// Radio buttons
import RadioButtons from "./radiobuttons";
// Styles
import styles, { button, body } from "../styles/global1";
// Formik
import { Formik, Form, Field, ErrorMessage } from "formik";

// Modal styles
// Replace: fontFamily: ["Open Sans", "Roboto", "Arial"].join(",")
const customStyles = {
  content: {
    backgroundColor: "#FFFFE0",
    fontSize: 14,
    fontFamily: ["Roboto", "Arial"].join(",")
  }
};

// Languages (*I18N* loaded)
const languageTags = [
  "en-GB [British English]",
  "en-US [American English]",
  "en-CA [Canadian English]",
  "zh-CN [Mainland China, simplified characters]",
  "zh-HK [Hong Kong, traditional characters]",
  "fr-BE [Belgian French]",
  "fr-FR [Standard French (especially in France)]",
  "es-ES [Castilian Spanish (Central-Northern Spain)]",
  "es-MX [Mexican Spanish]"
];
// Default language
const defaultOption = languageTags[0];

// Form(ik) fields initial values (*I18N* loaded)
const formValues = {
  mainTitle: "Registration",
  confMsg:
    "On successfully registering, you will receive an email with a link which you select for confirmation",
  closeButton: "Close... didn't want this page!",
  acctDetails: "Account details",
  acctTypes: "Account types",
  firstname: "First name...",
  lastname: "Last name...",
  email: "Email...",
  password: "",
  password2: "",
  dob: "Date of Birth...",
  lob: "Location of Birth...",
  locn: "Current location...",
  prefLangChoose: "Your preferred language",
  famGrpTypesMsg:
    "[Note that Family and Group types require a Group manager to manage members of the group]",
  registerButton: "Register",
  userPrefLang: "en-US"
};

// Error messages (*I18N* loaded)
const errorMsgs = {
  userReqd: "Username is required",
  userNameInvalid: "Not a recognised name string",
  emailReqd: "Email is required",
  emailInvalid: "Invalid email address"
};

const fieldStyle = {
  width: "300px"
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#registration");

const onChangeLang = value => {
  console.log(`Pref. language: ${value}`);
};

const onChangeAcctType = value => {
  console.log(`Account type: ${value}`);
};

//... Functions (Validation)
const validateUsernames = name => {
  let error;
  if (!name) {
    error = errorMsgs.userReqd;
  } else if (!/^[^\\\./:\*\?\""<>\|]{1}[^\\/:\*\?\""<>\|]{0,50}$/i.test(name)) {
    error = errorMsgs.userNameInvalid;
  }
  return error;
};

//... Main Component
class RegistrationApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      date: new Date()
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onDateChange = date => this.setState({ date });

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <style jsx="true">{button}</style>
        <button onClick={this.handleOpenModal}>Trigger Modal</button>
        <Modal
          isOpen={this.state.showModal}
          style={customStyles}
          contentLabel="Minimal Modal Example"
        >
          <h2>{formValues.mainTitle}</h2>
          <p>{formValues.confMsg}</p>
          <section className="stdinp">
            <button className="closeregardless" onClick={this.handleCloseModal}>
              {formValues.closeButton}
            </button>
          </section>
          <Formik
            initialValues={formValues}
            validate={values => {
              let error = {};
              if (!values.email) {
                error.email = errorMsgs.emailReqd;
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                error.email = errorMsgs.emailInvalid;
              }
              return error;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <table>
                  <tr>
                    <th>
                      <h3>{values.acctDetails}</h3>
                    </th>
                    <th>
                      <h3>{values.acctTypes}</h3>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="firstname"
                          placeholder={values.firstname}
                          validate={validateUsernames}
                        />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="lastname"
                          placeholder={values.lastname}
                          validate={validateUsernames}
                        />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="email"
                          name="email"
                          placeholder={values.email}
                        />
                        <ErrorMessage name="email" component="div" />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="password"
                          name="password"
                          placeholder="Password..."
                        />
                        <ErrorMessage name="password" component="div" />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="password"
                          name="password2"
                          placeholder="Password Verify..."
                        />
                        <ErrorMessage name="password" component="div" />
                      </section>
                      <section className="stdinp">
                        <DatetimeComp
                          dtId="dtDob"
                          dateFormat="YYYY-MM-DD"
                          placeholder={values.dob}
                        />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="birthLocation"
                          placeholder={values.lob}
                        />
                      </section>
                      <section className="stdinp">
                        <Field
                          style={fieldStyle}
                          type="input"
                          name="currLocation"
                          placeholder={values.locn}
                        />
                      </section>
                      <section>{values.prefLangChoose}</section>
                      <section className="stdinp">
                        <Dropdown
                          className="adropdown"
                          options={languageTags}
                          onChange={onChangeLang}
                          value={defaultOption}
                          placeholder={values.prefLangChoose}
                        />
                      </section>
                    </td>
                    <td>
                      <section>{values.famGrptypesMsg}</section>
                      <section>
                        <RadioButtons />
                      </section>
                    </td>
                  </tr>
                </table>
                <section className="register">
                  <button
                    type="register"
                    onClick={this.handleCloseModal}
                    disabled={isSubmitting}
                  >
                    {values.registerButton}
                  </button>
                </section>
              </Form>
            )}
          </Formik>
        </Modal>

        <style jsx="true">{`
            section { background: #ffffe0 }
            .radiobutton {
                height: 25px, width: 75%;
                border: 1px solid black;
                display: flex;
                align-items: center;
                margin-bottom: 3px
            }
            .closeegardless {
                height: 25px, width: 100%;
                margin-bottom: 3px
            }
            .stdinp {
                height: 25px;
                width: 300px;
                margin-bottom: 3px
            }
            .register {
                height: 25px; width: 100%
            }
            .afield {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                color: red
            }
            .adropdown {
                width: 100%;
                height: 25px;
                box-sizing: border-box;
                color: #000;
                fontSize: 14px
            }
        `}</style>
      </div>
    );
  }
}

export default RegistrationApp;
