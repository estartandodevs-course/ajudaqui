import * as S from "./LayoutStyled";

export const Layout = ({ hasTabBar = false, children }) => {
  return (
    <>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      { children }
      {!hasTabBar && <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" />}
    </>
  );
};
