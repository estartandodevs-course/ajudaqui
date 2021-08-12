import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import * as S from "./BackNavigationStyled";

export const BackNavigation = ({ hasArrow }) => {
  const { goBack } = useHistory();
  return (
    <S.Container>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      { hasArrow && <S.Back src="/assets/svg/back.svg" onClick={() => goBack()} /> }
    </S.Container>
  );
};

BackNavigation.propTypes = {
  hasArrow: PropTypes.bool,
};
BackNavigation.defaultProps = {
  hasArrow: true,
};
