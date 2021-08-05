import { TabBar } from "../TabBar";
import * as S from "./LayoutStyled";

export const Layout = ({ hasTabBar = false, children }) => {
  return (
    <S.LayoutWrapper>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      { children }
<<<<<<< HEAD
      {!hasTabBar ? <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" /> : <TabBar />}
=======
      {!hasTabBar && <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" />}
>>>>>>> 267f212 (chore: updated styles)
    </S.LayoutWrapper>
  );
};
