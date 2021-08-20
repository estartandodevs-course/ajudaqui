import React from "react";
import * as S from "./OrderCard.Styled";

export const OrderCard = (props) => {
  const {
    request, photoURL, status, order, name, action, warning,
  } = props;

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
          <S.Request>{request}</S.Request>
        </S.Texts>
        <S.Texts>
          STATUS:
          <S.Status>{status}</S.Status>
        </S.Texts>
        <S.Texts>
          PEDIDO FEITO HÁ:
          <S.Order>{order}</S.Order>
        </S.Texts>
      </S.ContainerTexts>
      <S.CardButtom width="100%" borderRadius="0">
        CANCELAR PEDIDO
        <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
      </S.CardButtom>
    </S.ContainerOrderCard>
  );
};
