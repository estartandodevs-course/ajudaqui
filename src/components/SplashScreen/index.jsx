import { Button } from "../ButtonComponent/ButtonStyled";
import * as S from "./SplashScreenStyled";

export const SplashScreen = () => {
  return (
    <S.Container>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      <S.Title>
        Precisando de ajuda?
      </S.Title>
      <S.Subtitle>Encontre um voluntário(a)</S.Subtitle>
      <S.ImageCenter src="/assets/images/logo.png" />
      <S.ImageSubLogo src="/assets/svg/ajudaqui.svg" />
      <Button style={{ zIndex: "1" }}>Começar</Button>
      <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" />
    </S.Container>
  );
};
