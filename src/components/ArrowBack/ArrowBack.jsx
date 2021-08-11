import * as S from "./ArrowBackStyled";

export const ArrowBack = ({ onClick, ...restProps }) => {
  return (
    <S.ContentBack {...restProps}>
      <S.Back src="/assets/svg/back.svg" alt="back" onClick={onClick} />
    </S.ContentBack>
  );
};
