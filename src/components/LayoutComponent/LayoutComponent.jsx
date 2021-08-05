import { TabBar } from "../TabBar";
import * as S from "./LayoutStyled";

export const Layout = ({ hasTabBar = false, children }) => {
  return (
    <S.LayoutWrapper>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      { children }
      {!hasTabBar ? <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" /> : <TabBar />}
    </S.LayoutWrapper>
  );
};
