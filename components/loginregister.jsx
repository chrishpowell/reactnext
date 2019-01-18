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
import css from "../styles/dd-styles.css";
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
    top: "2%",
    right: "5%",
    bottom: "auto",
    left: "auto",
    fontFamily: ["Roboto", "Arial"].join(",")
  }
};

// Languages (*I18N* loaded)
const languageTags = [
  {
    type: "group",
    name: "European:",
    items: [
      { value: "en-GB", label: "en-GB [British English]" },
      { value: "en-US", label: "en-US [American English]" },
      { value: "en-CA", label: "en-CA [Canadian English]" },
      { value: "fr-BE", label: "fr-BE [Française de Belgique]" },
      {
        value: "fr-FR",
        label: "fr-FR [Français standard (notamment en France)]"
      },
      {
        value: "es-ES",
        label: "es-ES [Castilian Spanish (Central-Northern Spain)]"
      },
      { value: "es-MX", label: "es-MX [Mexican Spanish]" }
    ]
  },
  {
    type: "group",
    name: "Asian:",
    items: [
      { value: "zh-CN", label: "zh-CN [中国大陆, 简化字符]" },
      { value: "zh-HK", label: "zh-HK [Hong Kong, traditional characters]" }
    ]
  }
];
// Default language
const defaultOption = languageTags[0];

// Form(ik) fields initial values (*I18N* loaded)
const formValues = {
  mainTitle: "Registration",
  confMsg:
    "Note: On successfully registering, you will receive an email with a link which you select for confirmation.",
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
    "Selecting Family or Group types means you will be the Group Manager managing members of the group. You can add or change members at any time.",
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
        <button
          style={{ width: "100%", height: "100%" }}
          onClick={this.handleOpenModal}
        >
          Trigger Modal
        </button>
        <Modal
          isOpen={this.state.showModal}
          style={customStyles}
          contentLabel="Minimal Modal Example"
        >
          <h2 align="center" className="regTitle">
            {formValues.mainTitle}
          </h2>
          <section className="closeregardless">
            <button className="closeButton" onClick={this.handleCloseModal}>
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
                <table style={{ marginBottom: 4 }}>
                  <thead>
                    <tr>
                      <th>
                        <h3>{values.acctDetails}</h3>
                      </th>
                      <th>
                        <h3>{values.acctTypes}</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ width: 300 }}>
                        <section className="stdinp" style={{ marginTop: 2 }}>
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
                        <section
                          style={{ height: 15, marginBottom: 1, fontSize: 12 }}
                        >
                          {values.prefLangChoose}
                        </section>
                        <section className="stdinp" style={{ marginTop: 0 }}>
                          <Dropdown
                            className={css.ddroot}
                            controlClassName={css.ddcontrol}
                            menuClassName={css.ddmenu}
                            arrowClassName={css.ddarrow}
                            options={languageTags}
                            onChange={onChangeLang}
                            value={defaultOption}
                            placeholder={values.prefLangChoose}
                          />
                        </section>
                      </td>
                      <td style={{ width: 500 }}>
                        <section>
                          <RadioButtons />
                        </section>
                        <section className="famGrpMsg">
                          {values.famGrpTypesMsg}
                        </section>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <section className="register">
                  <button
                    className="regButton"
                    type="submit"
                    onClick={this.handleCloseModal}
                    disabled={isSubmitting}
                  >
                    {values.registerButton}
                  </button>
                  <section className="confMsg">{formValues.confMsg}</section>
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
          .radiobutton {
            height: 25px;
            width: 75%;
            border: 1px solid black;
            display: flex;
            align-items: center;
            margin-bottom: 3px;
          }
          .closeregardless {
            height: 25px;
            width: 325px;
            margin: auto auto 15px auto;
          }
          .closeButton {
            background: #90ee90;
          }
          .stdinp {
            height: 25px;
            width: 100%;
            margin: 0 1px 3px 1px;
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
          .afield {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            color: red;
          }
          .adropdown {
            width: 100%;
            height: 25px;
            box-sizing: border-box;
            color: #000;
            fontsize: 14px;
          }
        `}</style>
      </div>
    );
  }
}

export default RegistrationApp;
