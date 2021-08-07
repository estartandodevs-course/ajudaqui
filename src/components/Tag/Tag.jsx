import * as S from "./TagStyled";

export const Tag = ({ children }) => {
  return (
    <S.TagContainer>
      <S.TagContent>
        {children}
      </S.TagContent>
    </S.TagContainer>
  );
};
