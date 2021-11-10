import { Routes as Switch, Route } from 'react-router-dom';
import {
  Home, Onboarding, Register, Login, AskForHelp, ScreenEvaluation, SelectProfile,
  RegisterNewPassword, UserInformation, ProfileVoluntary,
  OrderStatus, ThanksScreen, EmergencyRequest, IssueCertificate, ActivityProgress,
  HistoricPage,
} from '../pages';
import { Modal } from '../components';
import { useModal } from '../contexts';

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
        <Route path="/" element={<Home />} />
        <Route path="/select-profile" element={<SelectProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-information" element={<UserInformation />} />
        <Route path="/ask-for-help" element={<AskForHelp />} />
        <Route path="/register-new-password" element={<RegisterNewPassword />} />
        <Route path="/screen-evaluation/:helpRequestId" element={<ScreenEvaluation />} />
        <Route path="/profile" element={<ProfileVoluntary />} />
        <Route path="/order-status/:helpRequestId" element={<OrderStatus />} />
        <Route path="/thanks" element={<ThanksScreen />} />
        <Route path="/emergency" element={<EmergencyRequest />} />
        <Route path="/issue-certificate" element={<IssueCertificate />} />
        <Route path="/emergency/:helpRequestId" element={<EmergencyRequest />} />
        <Route path="/activity-progress/:helpRequestId" element={<ActivityProgress />} />
        <Route path="/historic" element={<HistoricPage />} />
      </Switch>
    </>
  );
}
