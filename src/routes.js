import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Register, RegistrationForm } from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/with-phone" component={RegistrationForm} />
      </Switch>
    </BrowserRouter>
  );
}
