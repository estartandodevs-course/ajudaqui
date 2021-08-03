import * as S from "./TabBarStyled";

export const TabBar = () => {
  return (
    <S.TabBar>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon home.svg" />
        <S.DescriptionIcon>Início</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon ajuda.svg" />
        <S.DescriptionIcon>Ajuda</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon historico.svg" />
        <S.DescriptionIcon>Histórico</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon perfil.svg" />
        <S.DescriptionIcon>Perfil</S.DescriptionIcon>
      </S.IconContent>
    </S.TabBar>
  );
};
