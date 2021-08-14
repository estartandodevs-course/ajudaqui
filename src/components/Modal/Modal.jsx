import ReactDOM from "react-dom";
import * as S from "./ModalStyled";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <S.Modal>
      {children}
    </S.Modal>,
    document.getElementById("modal-root"),
  );
};
