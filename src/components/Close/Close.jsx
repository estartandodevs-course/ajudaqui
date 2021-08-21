import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./CloseStyled";

export const Close = ({ hasClose }) => {
  const { push } = useHistory();
  return (
    <>
      { hasClose && <S.Close src="/assets/svg/close.svg" onClick={() => push("/")} /> }
    </>
  );
};

Close.propTypes = {
  hasClose: PropTypes.bool,
};
Close.defaultProps = {
  hasClose: false,
};
