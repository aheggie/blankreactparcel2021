import React from "react";
import { render } from "react-dom";
import App from "./App";

try {
  render(
    <React.StrictMode>
      <App></App>
    </React.StrictMode>,
    document.getElementById("root")
  );
} catch (error) {
  console.error(error);
}
