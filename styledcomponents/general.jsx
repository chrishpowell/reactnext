//-------------------------------
//  STYLED COMPONENTS (GENERAL)
//-------------------------------
import React from "react";

// const Template = (props) => {
//   return (
//     <tag style={props.style}>
//       {props.children}
//       <style jsx>{`
//         tag {
//         }
//       `}</style>
//       <style jsx>{``}</style>
//     </tag>
//   );
// };

//-------------------------------------
//        GENERAL
//-------------------------------------
//
// - Button
export const Button = ({ children, type }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          width: 90px;
          height: 95%;
          border-radius: 2px;
          color: black;
          font-size: 14px;
          border: 1px solid black;
          margin-top: 7px;
          margin-right: 4px;
          outline: none;
        }
        button:hover {
          background: #bbdefb;
          bordercolor: darkBlue;
        }
      `}</style>
      <style jsx>{`
        button {
          background: ${type === "account"
            ? "#8aacc8"
            : type === "settings"
            ? "#af8eb5"
            : type === "lightgreen"
            ? "lightgreen"
            : type === "qna"
            ? "#af8eb5"
            : "lightblue"};
        }
      `}</style>
    </button>
  );
};

//          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
// - Big Buttons
export const BigButton = ({ children, type }) => {
  return (
    <button>
      {children}
      <style jsx>{`
        button {
          background: ${type === "login"
            ? "linear-gradient(35deg, #2980b9 30%, #85c1e9 70%)"
            : type === "register"
            ? "linear-gradient(35deg, #ec7063 30%, #cd6155 70%)"
            : "lightblue"};
          border-radius: 3px;
          border: 1px solid grey;
          color: black;
          height: 100%;
          width: 100%;
          display: block;
          padding: 0;
          margin: 0;
          cursor: pointer;
          text-align: center;
        }
        button:hover {
          background: ${type === "login"
            ? "linear-gradient(35deg, #85c1e9 30%, #2980b9 70%)"
            : type === "register"
            ? "linear-gradient(35deg, #cd6155 30%, #ec7063 70%)"
            : "#5499c7"};

          border-color: darkBlue;
        }
      `}</style>
    </button>
  );
};

//
// - Input
export const Input = props => {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          width: 250px;
          height: 25px;
          box-sizing: border-box;
          color: black;
        }
      `}</style>
    </>
  );
};

//
// - Label
export const Label = ({ children }) => {
  return (
    <label>
      {children}
      <style jsx>{`
        label {
          position: absolute;
        }
      `}</style>
    </label>
  );
};
