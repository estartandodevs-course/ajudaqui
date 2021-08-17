
import { useState } from "react";
import {
  Button,
  Form, Input, Layout, ServiceEvaluation, UserGrade,
} from "../../components";
import { serviceEvaluationData } from "../../_mock";
import * as S from "./ScreenEvaluationStyled";

export const ScreenEvaluation = () => {
  const [evaluation, setEvaluation] = useState(0);
  return (
    <Layout hasTabBar>
      <S.ContainerScreenEvaluation>
        <S.ContentTitle>
          <S.TitleHelp>
            Ajuda encerrada
          </S.TitleHelp>
          <S.DescriptionPersonHelp>
            Por favor, avalie a pessoa que lhe ajudou
          </S.DescriptionPersonHelp>
          <S.UserHelped src="/assets/svg/sara.svg" alt="helped" />
        </S.ContentTitle>
        <S.ContentEvaluation>
          <S.NamePersonHelp>
            Sara Patrícia
          </S.NamePersonHelp>
          <UserGrade grade={evaluation} />
          <S.ContainerEvaluation>
            {serviceEvaluationData.map((item) => {
              return (
                <ServiceEvaluation
                  key={item.id}
                  src={item.icon}
                  alt={item.description}
                  click={() => setEvaluation(item.value)}
                >
                  {item.description}
                </ServiceEvaluation>
              );
            }) }
          </S.ContainerEvaluation>
        </S.ContentEvaluation>
        <Form
          initialValues={{
            comment: "",
            grade: evaluation,
          }}
          enableReinitialize
        >
          <Input type="text" name="comment" label="Deixar comentário (opcional)" />
          <S.PositionButton>
            <Button type="submit">
              enviar
            </Button>
          </S.PositionButton>
        </Form>
      </S.ContainerScreenEvaluation>
    </Layout>
  );
};
