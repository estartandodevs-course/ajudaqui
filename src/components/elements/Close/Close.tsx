import { useNavigate } from 'react-router-dom';
import * as S from './CloseStyled';
import { ICloseProps } from './interfaces';

export const Close = ({ hasClose }: ICloseProps) => {
  const navigation = useNavigate();

  return (
    <>
      {hasClose
      && (
      <S.Close
        src="/assets/svg/close.svg"
        onClick={() => navigation('/')}
      />
      )}
    </>
  );
};
