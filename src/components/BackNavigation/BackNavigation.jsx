import { useHistory } from "react-router-dom";
import { Layout } from "../LayoutComponent";
import * as S from "./BackNavigationStyled";

export const BackNavigation = ({ hasNoArrow = false }) => {
  const { goBack } = useHistory();
  return (
    <S.Container>
      { !hasNoArrow && <S.ImageTop src="/assets/svg/detalhe topo tela.svg" /> }
      { !hasNoArrow ? <S.Back src="/assets/svg/back.svg" onClick={() => goBack()} /> : <Layout /> }
    </S.Container>
  );
};
