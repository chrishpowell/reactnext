/* global.jsx */
import css from "styled-jsx/css";

// Scoped styles
export const button = css.global`
  button[register] {
      width: 100%,;
      height: 100%;
      border-radius: 2;
      color: black;
      border: 1px solid black;
      margin: 0;
      outline: "none";
      background: #9ACD32;
      :hover {
        background-color: #bbdefb;
        border-color: #1A237E
      }
    },
    button[close] {
      width: 100%,;
      height: 100%;
      border-radius: 2;
      color: black;
      border: 1px solid black;
      margin: 0;
      outline: "none";
      background: #E6E6FA;
      :hover {
        background-color: #bbdefb;
        border-color: #1A237E
      }
    }
  }`;
