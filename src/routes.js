import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home, Onboarding, Register, Login, AskForHelp, ScreenEvaluation, VolunteerHome,
} from "./pages";
import { UserInformation } from "./pages/UserInformation";
import { RegistrationForm } from "./pages/Register/Registrations";
import { RegisterNewPassword } from "./pages/RegisterNewPassword";
import { Modal } from "./components";
import { useModal } from "./contexts";

export default function Routes() {
  const { isOpen, modalContent } = useModal();
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/select-profile" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/user-information" component={UserInformation} />
      <Route exact path="/ask-for-help" component={AskForHelp} />
      <Route exact path="/register-new-password" component={RegisterNewPassword} />
      <Route exact path="/screen-evaluation" component={ScreenEvaluation} />
      <Route exact path="/volunteer-home" component={VolunteerHome} />
    </Switch>
    <>
      {isOpen && (
      <Modal>
        {modalContent}
      </Modal>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/select-profile" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/user-information" component={UserInformation} />
        <Route exact path="/ask-for-help" component={AskForHelp} />
        <Route exact path="/register-new-password" component={RegisterNewPassword} />
        <Route exact path="/screen-evaluation" component={ScreenEvaluation} />
      </Switch>
    </>
  );
}
