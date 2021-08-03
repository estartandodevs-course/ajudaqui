import * as S from "./TabBarStyled";

export const TabBar = ({ onClick }) => {
  return (
    <S.TabBar>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon home.svg" onClick={onClick} />
        <S.DescriptionIcon>Início</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon ajuda.svg" onClick={onClick} />
        <S.DescriptionIcon>Ajuda</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon historico.svg" onClick={onClick} />
        <S.DescriptionIcon>Histórico</S.DescriptionIcon>
      </S.IconContent>
      <S.IconContent>
        <S.ImageIcon src="/assets/svg/icon perfil.svg" onClick={onClick} />
        <S.DescriptionIcon>Perfil</S.DescriptionIcon>
      </S.IconContent>
    </S.TabBar>
  );
};
