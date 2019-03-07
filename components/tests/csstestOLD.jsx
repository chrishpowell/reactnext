import React from "react";

const Button = ({ children, type }) => {
  console.log("type..> ", type);
  return (
    <button>
      {children}
      <style jsx>
        {`
          button {
            width: 90px;
            height: 95%;
            border-radius: 2px;
            color: black;
            border: 1px solid black;
            margin-top: 5px;
            margin-right: 9px;
            outline: none;
          }
          button:hover {
            background-color: #bbdefb;
            border-color: darkBlue;
          }
        `}
      </style>
      <style jsx>{`
        button {
          background: ${type === "notifications" ? "green" : "red"};
        }
      `}</style>
    </button>
  );
};

const Test = () => {
  return (
    <section>
      <p>Test</p>
      <style jsx>{`
        section {
          background: #f7dc6f;
        }
      `}</style>
    </section>
  );
};

const Test1 = () => {
  return (
    <section>
      <p>Test1</p>
      <style jsx>{`
        section {
          background: lightgreen;
        }
      `}</style>
    </section>
  );
};

const CssTestTags = () => {
  return (
    <>
      <Test />
      <Test1 />
      <Button type="notifications">AButton</Button>
      <Button type="none">ANOButton</Button>
    </>
  );
};

export default CssTestTags;
