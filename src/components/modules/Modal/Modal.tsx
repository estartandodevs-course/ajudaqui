import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ModalStyled';

interface IModalProps {
  children: ReactNode,
}

export const Modal = ({ children, ...restProps }: IModalProps) => ReactDOM.createPortal(
  <S.Modal {...restProps}>
    {children}
  </S.Modal>,
  document.getElementById('modal-root'),
);
