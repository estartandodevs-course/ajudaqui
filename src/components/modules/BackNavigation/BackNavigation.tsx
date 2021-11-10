import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './BackNavigationStyled';
import { Close } from '../../elements';

export const BackNavigation = ({ hasArrow }) => {
  const navigation = useNavigate();
  return (
    <S.Container>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      { hasArrow && <S.Back src="/assets/svg/back.svg" onClick={() => navigation(-1)} /> }
      <Close />
    </S.Container>
  );
};

BackNavigation.propTypes = {
  hasArrow: PropTypes.bool,
};
BackNavigation.defaultProps = {
  hasArrow: true,
};
