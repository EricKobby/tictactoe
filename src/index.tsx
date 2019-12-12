import * as React from "react";
import { render } from "react-dom";

import TicTacToe from "./components/TicTacToe";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TicTacToe />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
