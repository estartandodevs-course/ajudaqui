import { parseISO, differenceInMinutes } from "date-fns";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts";
import { orderStatusName, PROFILES_TYPES } from "../../utils/constants";
import * as S from "./OrderCard.Styled";

export const OrderCard = ({ helpRequest }) => {
  const {
    order, photoURL, status, createdAt, name, action, warning, startTime,
  } = helpRequest;

  const { profileType } = useAuth();
  const { push } = useHistory();
  const runningTime = differenceInMinutes(new Date(), parseISO(createdAt));
  const { helpRequestId } = useParams();

  const handleFinishedTask = () => {
    const verify = startTime ? "Iniciar" : "Finalizar";
    const hasFinished = verify === "Iniciar";
    if (hasFinished) push(`/screen-evaluation/${helpRequestId}`);
    push("/activity-progress");

    return verify;
  };

  return (
    <S.ContainerOrderCard>
      <S.ContainerIcon>
        { photoURL ? <S.Icon src={photoURL} alt={name} />
          : <S.ImageDefault src="/assets/svg/icon ok.svg" alt="Icon ok" /> }
      </S.ContainerIcon>
      <S.ContainerTitle>
        <S.Title>{action}</S.Title>
      </S.ContainerTitle>
      <S.ContainerSubtitle>
        <S.Subtitle>{warning}</S.Subtitle>
      </S.ContainerSubtitle>
      <S.ContainerTexts>
        <S.Texts>
          SOLICITAÇÃO:
          <S.Request>{order?.option}</S.Request>
        </S.Texts>
        <S.Texts>
          STATUS:
          <S.Status>{orderStatusName[status]}</S.Status>
        </S.Texts>
        <S.Texts>
          PEDIDO FEITO HÁ:
          <S.Order>{`${runningTime} minutos`}</S.Order>
        </S.Texts>
      </S.ContainerTexts>
      {profileType === PROFILES_TYPES.ELDERLY ? (
        <S.CardButtom width="100%" borderRadius="0">
          CANCELAR PEDIDO
          <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
        </S.CardButtom>
      )
        : (
          <S.CardButtom
            width="100%"
            borderRadius="0"
            onClick={handleFinishedTask}
          >
            {startTime ? "Iniciar" : "Finalizar"}
            <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
          </S.CardButtom>
        )}
    </S.ContainerOrderCard>
  );
};

