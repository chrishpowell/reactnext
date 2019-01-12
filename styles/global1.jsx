/* global.jsx */
import css from "styled-jsx/css";

// Scoped styles
export const button = css`
  button {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      color: black;
      border: 1px solid black;
      margin: 0;
      outline: none;
      background: #9ACD32;
    },
    button.register{ background: #9ACD32 },
    button.close{ background: #E6E6FA },
    button:hover {
        background-color: #bbdefb;
        border-color: darkgray
      }
  }`;
