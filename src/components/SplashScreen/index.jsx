import { Typography } from "../Typography";
import { Button } from "../ButtonComponent/ButtonStyled";
import * as S from "./SplashScreenStyled";

export const SplashScreen = () => {
  return (
    <S.Container>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      <Typography color="#4E368">Precisando de ajuda?</Typography>
      <S.ImageCenter src="/assets/images/logo.png" />
      <S.ImageSubLogo src="/assets/svg/ajudaqui.svg" />
      <Button>Começar</Button>
      <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" />
    </S.Container>
  );
};
