import React from "react";
import * as S from "./OrderCard.Styled";

export const OrderCard = (props) => {
  const { solicitação, status, pedido } = props;

  return (
    <S.ContainerOrderCard>
      <S.ContainerIcon>
        <S.Icon src="/assets/svg/icon ok.svg" alt="Icon ok" />
      </S.ContainerIcon>
      <S.ContainerTitle>
        <S.Title>Pedido enviado!</S.Title>
      </S.ContainerTitle>
      <S.ContainerSubtitle>
        <S.Subtitle>Em breve você será atendido(a)</S.Subtitle>
      </S.ContainerSubtitle>
      <S.ContainerTexts>
        <S.Texts>
          SOLICITAÇÃO:
          {solicitação}
        </S.Texts>
        <S.Texts>
          STATUS:
          {status}
        </S.Texts>
        <S.Texts>
          PEDIDO FEITO HÁ:
          {pedido}
        </S.Texts>
      </S.ContainerTexts>
      <S.CardButtom width="100%" borderRadius="0">
        CANCELAR PEDIDO
        <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
      </S.CardButtom>
    </S.ContainerOrderCard>
  );
};
