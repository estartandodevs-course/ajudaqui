import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './CloseStyled';

export const Close = ({ hasClose }) => {
  const navigation = useNavigate();
  return (
    <>
      { hasClose && <S.Close src="/assets/svg/close.svg" onClick={() => navigation('/')} /> }
    </>
  );
};

Close.propTypes = {
  hasClose: PropTypes.bool,
};
Close.defaultProps = {
  hasClose: false,
};
