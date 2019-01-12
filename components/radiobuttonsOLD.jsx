/*
 * Radio Buttons
 *
 */
// *** Globally imported by webpack: react, render(react-dom), Formik, (TBD: react-emotion, normalize.css, typeface-open-sans)
// CSS 'reset'
//import 'normalize.css';
// Emotion
//import { ThemeProvider } from "emotion-theming";
//import styled from "react-emotion";
// Predikt font
// import "typeface-open-sans";

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

const RadioButton = styled("div")({
  height: 25,
  width: "75%",
  border: "1px solid black",
  display: "flex",
  alignItems: "center",
  marginBottom: 3
});

const Input = styled("input")({
  height: 14,
  backgroundColor: "#E6E6FA"
});

const Label = styled("label")({
  width: "90%"
});

const Button = styled("button")({
  height: 25,
  width: "75%"
});

const RadioButtons = () => (
  <div>
    <Formik
      initialValues={{ accountTypeId: accountTypeChkdId }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 400);
      }}
      render={({ values }) => (
        <Form>
          <FieldArray
            name="accountTypeId"
            render={arrayHelpers => (
              <>
                {accountTypes.map(accountType => (
                  <RadioButton key={accountType.id}>
                    <Input
                      type="radio"
                      name="accountType"
                      id={accountType.id}
                      defaultChecked={accountType.id == accountTypeChkdId}
                      onChange={e => {
                        e.target.checked
                          ? (values.accountTypeId = accountType.id)
                          : null;
                      }}
                    />
                    &nbsp;
                    <Label htmlFor={accountType.id}>
                      {accountType.desc} {accountType.price}
                    </Label>
                  </RadioButton>
                ))}
              </>
            )}
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    />
  </div>
);

export default RadioButtons;
