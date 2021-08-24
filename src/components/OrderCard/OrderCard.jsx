import { parseISO, differenceInMinutes } from "date-fns";
import React from "react";
import { orderStatusName } from "../../utils/constants";
import * as S from "./OrderCard.Styled";

export const OrderCard = ({ helpRequest }) => {
  const {
    order, photoURL, status, createdAt, name, action, warning,
  } = helpRequest;

  const runningTime = differenceInMinutes(new Date(), parseISO(createdAt));

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
      <S.CardButtom width="100%" borderRadius="0">
        CANCELAR PEDIDO
        <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
      </S.CardButtom>
    </S.ContainerOrderCard>
  );
};

