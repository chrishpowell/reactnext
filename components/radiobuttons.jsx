/*
 * Radio Buttons
 *
 */
// *** Globally imported by webpack: react, render(react-dom), Formik, (TBD: react-emotion, normalize.css, typeface-open-sans)
// CSS 'reset'
//import 'normalize.css';
// Emotion
//import { ThemeProvider } from "emotion-theming";
import css from "styled-jsx/css";
// Predikt font
// import "typeface-open-sans";
// Formik
import { FieldArray } from "formik";

// Array of radio buttons
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
const accountTypeChkdId = accountTypes[0].id;

const RadioButtons = () => (
  <>
    <div>
      <FieldArray
        name="accountTypeId"
        render={arrayHelpers => (
          <>
            {accountTypes.map(accountType => (
              <section className="radiobutton" key={accountType.id}>
                <input
                  type="radio"
                  name="accountType"
                  className="input"
                  id={accountType.id}
                  defaultChecked={accountType.id == accountTypeChkdId}
                  onChange={e => {
                    e.target.checked
                      ? (accountTypes.accountTypeId = accountType.id)
                      : null;
                  }}
                />
                &nbsp;
                <label className="label" htmlFor={accountType.id}>
                  {accountType.desc} {accountType.price}
                </label>
              </section>
            ))}
          </>
        )}
      />
    </div>

    <style jsx="true">{`
      .radiobutton {
        height: 25px;
        width: 75%;
        border: 1px solid black;
        display: flex;
        align-items: center;
        margin-bottom: 3px;
      }
      .label {
        width: 90%;
      }
    `}</style>
  </>
);

export default RadioButtons;
