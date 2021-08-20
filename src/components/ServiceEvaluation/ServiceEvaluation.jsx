import * as S from "./ServiceEvaluationStyled";

export const ServiceEvaluation = ({
  id, click, children, ...restProps
}) => {
  return (
    <S.ContentEvaluation>
      <S.IconsEvaluation
        onClick={click}
        {...restProps}
      />
      <S.DescriptionEvaluation>
        {children}
      </S.DescriptionEvaluation>
    </S.ContentEvaluation>
  );
};
