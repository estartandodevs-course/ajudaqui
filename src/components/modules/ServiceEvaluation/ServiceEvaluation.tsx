import { IServiceEvaluationProps } from './interfaces';
import * as S from './ServiceEvaluationStyled';

export const ServiceEvaluation = ({ children, $active }: IServiceEvaluationProps) => (
  <S.ContentEvaluation>
    <S.IconsEvaluation />
    <S.DescriptionEvaluation $active={$active}>
      {children}
    </S.DescriptionEvaluation>
  </S.ContentEvaluation>
);
