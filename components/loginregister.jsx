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
// Datetime picked
import DateTimePicker from "./datetimepicker";
// Radio buttons
import RadioButtons from "./radiobuttons";
// Styles
import styles, { button, body } from "../styles/global1";
// Avatar
// import...?
// Formik
import { Formik, Form, Field, ErrorMessage } from 'formik';


// Modal styles
// Replace: fontFamily: ["Open Sans", "Roboto", "Arial"].join(",")
const customStyles = {
  content: {
    backgroundColor: "#FFFFE0",
    fontSize: 14,
    fontFamily: ["Roboto", "Arial"].join(",")
  }
};

// Languages
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

// Account Types (Radio Buttons)
const accountTypes = [
  {
    id: "individual",
    desc: "Individual [1 user, secure Home Page]",
    price: "€3.99 per month"
  },
  {
    id: "family",
    desc: "Family [2 to 5 users, secure Home Page]",
    price: "€7.99 per month"
  },
  {
    id: "team",
    desc: "Group [6 to 22 users, secure Home Page]",
    price: "€23.99 per month"
  },
  {
    id: "smallbus",
    desc: "Small business [Global home page, no charting]",
    price: "€29.99 per month"
  },
  {
    id: "corporate",
    desc: "Corporate [Global home page and marketing, no charting]",
    price: "€99.99 per month"
  }
];
// Determine default radio button
const accountTypeId = accountTypes[0].id;

// Form(ik) fields initial values
const formValues = {
  firstname: "First name...",
  lastname: "Last name...",
  email: "",
  password: "",
  password2: "",
  dob: "",
  lob: "",
  locn: "",
  lang: "en-US"
};

const fieldStyle = {
  width: "300px"
}

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
    error = "Required";
  } else if (!/^[^\\\./:\*\?\""<>\|]{1}[^\\/:\*\?\""<>\|]{0,50}$/i.test(name)) {
    error = "Not a recognised name string";
  }
  return error;
};

//... Classes
class Datetime extends React.Component {
  render() {
    return (
      <section className="dt">
        <Field
          className="afield"
          type="input"
          name="datetime"
          id="datetime"
          placeholder="Datetime..."
        />
      </section>
    );
  }
}

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
          <h2>Registration</h2>
          <p>
            On successfully registering, you will receive an email with a link
            which you select for confirmation.
          </p>
          <section className="stdinp">
            <button className="closeregardless" onClick={this.handleCloseModal}>
              Close, didn't want this page!
            </button>
          </section>
          <Formik
            initialValues={formValues}
            validate={values => {
              let errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
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
                    placeholder="Last name"
                    validate={validateUsernames}
                  />
                </section>
                <section className="stdinp">
                  <Field
                    style={fieldStyle}
                    type="email"
                    name="email"
                    placeholder="Email..."
                  />
                  <ErrorMessage name="email" component="div" />
                </section>
                <section className="stdinp">
                  <Field
                    style={fieldStyle}
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage name="password" component="div" />
                </section>
                <section className="stdinp">
                  <Field
                    style={fieldStyle}
                    type="password"
                    name="password2"
                    placeholder="Password Verify"
                  />
                  <ErrorMessage name="password" component="div" />
                </section>
                <section>
                Date of Birth
                </section>
                <section className="stdinp">
                  <Datetime className="dt" dateFormat="YYYY-MM-DD" />
                </section>
                <section className="stdinp">
                  <Field
                    style={fieldStyle}
                    type="input"
                    name="birthLocation"
                    placeholder="Location of Birth"
                  />
                </section>
                <section className="stdinp">
                  <Field
                    style={fieldStyle}
                    type="input"
                    name="currLocation"
                    placeholder="Current Location"
                  />
                </section>
                <section>
                Your preferred language
                </section>
                <section className="stdinp">
                  <Dropdown
                    className="adropdown"
                    options={languageTags}
                    onChange={onChangeLang}
                    value={defaultOption}
                    placeholder="Choose a preferred language"
                  />
                </section>
                <section>
                The Account type. Note that Family and Group types require a
                Group manager to manage members of the group.
                </section>
                <section>
                  <h3>Choose an account type</h3>
                  <RadioButtons />
                </section>
                <section>
                An avatar upload
                </section>
                <section className="register">
                  <button
                    type="register"
                    onClick={this.handleCloseModal}
                    disabled={isSubmitting}
                  >
                    Register
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
            .dt {
                height: 100%;
                margin-bottom: 3
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
