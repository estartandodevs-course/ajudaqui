import React from "react";
import { differenceInSeconds } from "date-fns";
import { useLocation } from "react-router-dom";
import { useStore } from "../../contexts";

import * as S from "./CompletedTaskStyle";

export const ThanksCompletedTask = ({ helpRequestId }) => {
  const { state } = useLocation();
  const { helpRequests } = useStore();
  const helpRequestData = helpRequests?.find((helpRequest) => (
    helpRequest?.id === (state?.helpRequestId || helpRequestId)
  ));

  const differenceInTime = differenceInSeconds(
    new Date(helpRequestData?.endTime), new Date(helpRequestData?.startTime),
  );

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
          {`Você conquistou ${(differenceInTime / 60)?.toFixed(0)} min de voluntariado`}
        </S.Paragraph2>
      </S.SecondSection>
    </S.Container>
  );
};
