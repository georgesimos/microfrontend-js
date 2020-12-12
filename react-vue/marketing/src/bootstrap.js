import React from "react";
import ReactDom from "react-dom";

// Mount function to start up the App
const mount = (element) => ReactDom.render(<h1>Marketing App</h1>, element);

// Run in development mode and in isolation
if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("marketing-dev-root");
  if (element) mount(element);
}

// Running through container and Exporting mount function
export default mount;
