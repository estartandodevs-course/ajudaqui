import { useHistory } from "react-router-dom";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { Button } from "../ButtonComponent/ButtonStyled";
import { Layout } from "../LayoutComponent";
import * as S from "./SplashScreenStyled";

export const SplashScreen = () => {
  const { push } = useHistory();
  const [widthScreen] = useWidthScreen();
  const showNavigation = widthScreen <= 1200;
  return (
    <Layout hasArrow={false} showNavigation={showNavigation}>
      <S.Container>
        <S.Title>
          Precisando de ajuda?
        </S.Title>
        <S.Subtitle>Encontre um voluntário(a)</S.Subtitle>
        <S.ImageCenter src="/assets/svg/Logo completa.svg" />
        <Button style={{ zIndex: "1" }} onClick={() => push("register")}>Começar</Button>
      </S.Container>
    </Layout>
  );
};
