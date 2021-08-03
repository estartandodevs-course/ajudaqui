import * as S from "./LayoutStyled";

export const Layout = ({ hasTabBar = false }) => {
  return (
    <>
      <S.ImageTop src="/assets/svg/detalhe topo tela.svg" />
      {!hasTabBar && <S.ImageBottom src="/assets/svg/detalhe baixo tela.svg" />}
    </>
  );
};
