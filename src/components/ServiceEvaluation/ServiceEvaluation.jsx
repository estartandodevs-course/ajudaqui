import * as S from "./ServiceEvaluationStyled";
import { serviceEvaluationData } from "../../_mock";


export const ServiceEvaluation = () => {
  return (
    <S.ContainerEvaluation>
      {serviceEvaluationData.map((item) => {
        return (
          <S.ContentEvaluation key={item.id}>
            <S.IconsEvaluation
              src={item.icon}
              alt={item.description}
            />
            <S.DescriptionEvaluation>
              {item.description}
            </S.DescriptionEvaluation>
          </S.ContentEvaluation>
        );
      })}
    </S.ContainerEvaluation>
  );
};
