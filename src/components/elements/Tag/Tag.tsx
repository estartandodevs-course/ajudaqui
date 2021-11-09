import { ITagProps } from './interfaces';
import * as S from './TagStyled';

export const Tag = ({ isActive, children }: ITagProps) => (
  <S.TagContainer
    isActive={isActive}
  >
    <S.TagContent>
      {children}
    </S.TagContent>
  </S.TagContainer>
);
