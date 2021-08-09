import * as S from "./TagStyled";

export const Tag = ({ isActive, children, ...restProps }) => {
  return (
    <S.TagContainer
      isActive={isActive}
      {...restProps}
    >
      <S.TagContent>
        {children}
      </S.TagContent>
    </S.TagContainer>
  );
};