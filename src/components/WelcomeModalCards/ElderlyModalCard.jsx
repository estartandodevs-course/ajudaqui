import * as S from "./ModalCardsStyled";

export const ElderlyModalCard = ({ onClick }) => {
  return (
    <>
      <S.CardContainer>
        <S.Close src="/assets/svg/close.svg" alt="Close" onClick={onClick} />
        <S.Title>
          Bem vindo(a)!
        </S.Title>
        <S.LogoImage src="/assets/svg/Logo completa.svg" alt="Logo" />
        <S.Description>
          Antes de poder chamar por ajuda precisamos que você complete o seu
          <S.Span> Perfil</S.Span>
        </S.Description>
        <S.ArrowDown src="/assets/svg/icon seta apontando.svg" />
      </S.CardContainer>
    </>
  );
};
