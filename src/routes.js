import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home, Onboarding, Register, Login, AskForHelp, ScreenEvaluation, SelectProfile,
  RegisterNewPassword, UserInformation, ProfileVoluntary,
  OrderStatus, ThanksScreen, EmergencyRequest, IssueCertificate, ActivityProgress,
  HistoricPage,
} from "./pages";
import { Modal } from "./components";
import { useModal } from "./contexts";

export default function Routes() {
  const { isOpen, modalContent } = useModal();
  return (
    <>
      {isOpen && (
      <Modal>
        {modalContent}
      </Modal>
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/select-profile" component={SelectProfile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/user-information" component={UserInformation} />
        <Route exact path="/ask-for-help" component={AskForHelp} />
        <Route exact path="/register-new-password" component={RegisterNewPassword} />
        <Route exact path="/screen-evaluation/:helpRequestId" component={ScreenEvaluation} />
        <Route exact path="/profile" component={ProfileVoluntary} />
        <Route exact path="/order-status/:helpRequestId" component={OrderStatus} />
        <Route exact path="/thanks" component={ThanksScreen} />
        <Route exact path="/emergency" component={EmergencyRequest} />
        <Route exact path="/issue-certificate" component={IssueCertificate} />
        <Route exact path="/emergency/:helpRequestId" component={EmergencyRequest} />
        <Route exact path="/activity-progress" component={ActivityProgress} />
        <Route exact path="/historic" component={HistoricPage} />
      </Switch>
    </>
  );
}
