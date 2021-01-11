import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route path='/auth' component={AuthApp} />
          <Route path='/' component={MarketingApp} />
        </Switch>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
