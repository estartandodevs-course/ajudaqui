import { useHistory } from "react-router-dom";
import { Button } from "../ButtonComponent/ButtonStyled";
import * as S from "./SplashScreenStyled";

export const SplashScreen = () => {
  const { push } = useHistory();

  return (
    <S.Container>
      <S.Title>
        Precisando de ajuda?
      </S.Title>
      <S.Subtitle>Encontre um voluntário(a)</S.Subtitle>
      <S.ImageCenter src="/assets/svg/Logo completa.svg" />
      <Button style={{ zIndex: "1" }} onClick={() => push("register")}>Começar</Button>
    </S.Container>
  );
};
