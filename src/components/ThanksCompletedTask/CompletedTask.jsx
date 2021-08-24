import React from "react";
import * as S from "./CompletedTaskStyle";

export const ThanksCompletedTask = (props) => {
  const {
    hours,
  } = props;
  return (
    <S.Container>
      <S.ContainerImage>
        <S.ImageLogo src="/assets/images/logo.png" alt="logo" />
      </S.ContainerImage>
      <S.FirstSection>
        <S.Paragraph1>
          Obrigada por concluir essa tarefa
        </S.Paragraph1>
      </S.FirstSection>
      <S.SecondSection>
        <S.Paragraph2>
          {`Você conquistou ${hours} de voluntariado`}
        </S.Paragraph2>
      </S.SecondSection>
    </S.Container>
  );
};
