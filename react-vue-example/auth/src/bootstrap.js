import React from "react";
import ReactDom from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the App
const mount = (element, { defaultHistory, onNavigate, initialPath }) => {
  const history = defaultHistory || createMemoryHistory({initialEntries:[initialPath]});
  if (onNavigate) history.listen(onNavigate);
  ReactDom.render(<App history={history} />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

// Run in development mode and in isolation
if (process.env.NODE_ENV === "development") {
  const element = document.getElementById("auth-dev-root");
  if (element) mount(element, { defaultHistory: createBrowserHistory() });
}

// Running through container and Exporting mount function
export default mount;
