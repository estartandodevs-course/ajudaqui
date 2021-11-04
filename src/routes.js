import { Routes as Switch, Route } from 'react-router-dom';
import {
  Home, Onboarding, Register, Login, AskForHelp, ScreenEvaluation, SelectProfile,
  RegisterNewPassword, UserInformation, ProfileVoluntary,
  OrderStatus, ThanksScreen, EmergencyRequest, IssueCertificate, ActivityProgress,
  HistoricPage,
} from './pages';
import { Modal } from './components';
import { useModal } from './contexts';

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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/select-profile" element={<SelectProfile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/user-information" element={<UserInformation />} />
        <Route exact path="/ask-for-help" element={<AskForHelp />} />
        <Route exact path="/register-new-password" element={<RegisterNewPassword />} />
        <Route exact path="/screen-evaluation/:helpRequestId" element={<ScreenEvaluation />} />
        <Route exact path="/profile" element={<ProfileVoluntary />} />
        <Route exact path="/order-status/:helpRequestId" element={<OrderStatus />} />
        <Route exact path="/thanks" element={<ThanksScreen />} />
        <Route exact path="/emergency" element={<EmergencyRequest />} />
        <Route exact path="/issue-certificate" element={<IssueCertificate />} />
        <Route exact path="/emergency/:helpRequestId" element={<EmergencyRequest />} />
        <Route exact path="/activity-progress/:helpRequestId" element={<ActivityProgress />} />
        <Route exact path="/historic" element={<HistoricPage />} />
      </Switch>
    </>
  );
}
