import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  /* Home, */ Onboarding, Register, Login, AskForHelp,
} from "./pages";
import { UserInformation } from "./pages/UserInformation";
import { RegistrationForm } from "./pages/Register/Registrations";
import { SplashScreen } from "./components";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SplashScreen} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/register/step-2" component={RegistrationForm} />
      <Route exact path="/user-information" component={UserInformation} />
      <Route exact path="/ask-for-help" component={AskForHelp} />
    </Switch>
  );
}
