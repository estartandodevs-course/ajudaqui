import { HTMLAttributes, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ModalStyled';

interface IModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
}

export const Modal = ({ children }: IModalProps) => ReactDOM.createPortal(
  <S.Modal>
    {children}
  </S.Modal>,
  document.getElementById('modal-root'),
);
