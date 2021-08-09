import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home, Onboarding, Register, Login,
} from "./pages";
import { UserInformation } from "./pages/UserInformation";
import { RegistrationForm } from "./pages/Register/Registrations";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/register/step-2" component={RegistrationForm} />
        <Route exact path="/userinformation" component={UserInformation} />
      </Switch>
    </BrowserRouter>
  );
}
