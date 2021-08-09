import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Register } from "./pages";
import { RegistrationForm } from "./pages/Register/Registrations";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/step" component={RegistrationForm} />
      </Switch>
    </BrowserRouter>
  );
}
