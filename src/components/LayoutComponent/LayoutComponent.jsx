import { TabBar } from "../TabBar";
import * as S from "./LayoutStyled";

export const Layout = ({ hasTabBar = false, children }) => {
  return (
    <S.LayoutWrapper>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      <S.LayoutMainContent>
        { children }
      </S.LayoutMainContent>
      {hasTabBar && <TabBar />}
    </S.LayoutWrapper>
  );
};
