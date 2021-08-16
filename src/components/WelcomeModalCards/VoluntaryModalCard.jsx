import * as S from "./ModalCardsStyled";

export const VoluntaryModalCard = ({ onClick }) => {
  return (
    <>
      <S.CardContainer>
        <S.Close src="/assets/svg/close.svg" alt="Close" onClick={onClick} />
        <S.Title>
          Bem vindo(a)!
        </S.Title>
        <S.LogoImage src="/assets/svg/Logo completa.svg" alt="Logo" />
      </S.CardContainer>
    </>
  );
};
