import ReactDOM from 'react-dom';
import * as S from './ModalStyled';

export const Modal = ({ children, alignItems }) => ReactDOM.createPortal(
  <S.Modal alignItems={alignItems}>
    {children}
  </S.Modal>,
  document.getElementById('modal-root'),
);
