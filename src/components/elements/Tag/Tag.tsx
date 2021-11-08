import * as S from './TagStyled';

interface ITagProps {
  isActive: boolean,
  children: string,
}

export const Tag = ({ isActive, children, ...restProps }: ITagProps) => (
  <S.TagContainer
    isActive={isActive}
    {...restProps}
  >
    <S.TagContent>
      {children}
    </S.TagContent>
  </S.TagContainer>
);
