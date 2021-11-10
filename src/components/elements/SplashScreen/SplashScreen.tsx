import { useNavigate } from 'react-router-dom';
import { Button } from '../Button/ButtonStyled';
import { ISplashScreenProps, SplashScreenDefaultProps } from './interfaces';
import * as S from './SplashScreenStyled';

export const SplashScreen = ({ hasButton }: ISplashScreenProps) => {
  const navigation = useNavigate();
  return (
    <S.Container>
      <S.Title>
        Precisando de ajuda?
      </S.Title>
      <S.Subtitle>
        Encontre um voluntário(a)
      </S.Subtitle>
      <S.ImageCenter
        src="/assets/svg/Logo completa.svg"
      />
      {hasButton && (
      <Button
        style={{ zIndex: 1 }}
        onClick={() => navigation('select-profile')}
      >
        Começar
      </Button>
      )}
    </S.Container>
  );
};

SplashScreen.defaultProps = SplashScreenDefaultProps;
