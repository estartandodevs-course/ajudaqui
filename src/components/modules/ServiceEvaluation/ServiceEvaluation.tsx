import * as S from './ServiceEvaluationStyled';

export const ServiceEvaluation = ({
  id, click, children, $active, ...restProps
}) => (
  <S.ContentEvaluation>
    <S.IconsEvaluation
      onClick={click}
      {...restProps}
    />
    <S.DescriptionEvaluation $active={$active}>
      {children}
    </S.DescriptionEvaluation>
  </S.ContentEvaluation>
);
