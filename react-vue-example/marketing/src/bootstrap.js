import React from "react";
import ReactDom from "react-dom";
import App from "./App";

// Mount function to start up the App
const mount = (element) => ReactDom.render(<App />, element);

// Run in development mode and in isolation
if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("marketing-dev-root");
  if (element) mount(element);
}

// Running through container and Exporting mount function
export default mount;
