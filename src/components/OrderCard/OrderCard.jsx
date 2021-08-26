import { parseISO, differenceInMinutes } from "date-fns";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth, useStore } from "../../contexts";
import {
  mappedCardTitleAndSubtitleByStatus,
  orderStatusId,
  orderStatusName,
  PROFILES_TYPES,
} from "../../utils/constants";
import * as S from "./OrderCard.Styled";

export const OrderCard = ({ helpRequest }) => {
  const { profileType } = useAuth();
  const { handleCancelOrder, loadingStore, voluntarys } = useStore();
  const { push } = useHistory();
  const { helpRequestId } = useParams();
  const runningTime = differenceInMinutes(new Date(), parseISO(helpRequest?.createdAt));
  const isCanceled = helpRequest?.status === orderStatusId.CANCELED;
  const verify = helpRequest?.startTime ? "Iniciar" : "Finalizar";
  const hasFinished = verify === "Iniciar";

  const voluntaryProfileData = voluntarys?.find((voluntary) => (
    voluntary.id === helpRequest?.voluntary?.id
  ));

  const handleFinishedTask = () => {
    switch (profileType) {
      case PROFILES_TYPES.ELDERLY: {
        if (hasFinished) {
          return push(`/screen-evaluation/${helpRequestId}`);
        }
        break;
      }
      case PROFILES_TYPES.VOLUNTARY: {
        if (hasFinished) {
          return push(`/screen-evaluation/${helpRequestId}`);
        }

        return push(`/activity-progress/${helpRequestId}`);
      }
      default:
        break;
    }

    return 1;
  };

  const handleCancelRequest = async () => {
    await handleCancelOrder(helpRequestId);
  };

  const cardData = mappedCardTitleAndSubtitleByStatus(helpRequest?.status, voluntaryProfileData);

  return (
    <S.ContainerOrderCard>
      <S.ContainerIcon>
        { (helpRequest?.photoURL && !isCanceled) ? (
          <S.Icon src={helpRequest?.photoURL} alt={helpRequest?.name} />
        ) : (
          <S.ImageDefault
            src={`/assets/svg/${!isCanceled ? "icon-ok.svg" : "icon-cancelado.svg"}`}
            alt="Icon ok"
          />
        )}
      </S.ContainerIcon>
      <S.ContainerTitle>
        <S.Title>{cardData?.title}</S.Title>
      </S.ContainerTitle>
      <S.ContainerSubtitle>
        <S.Subtitle as="div">
          {
          cardData?.subTitle.includes("/") ? (
            <>
              <strong>{cardData?.subTitle.split("/")[0]}</strong>
              {cardData?.subTitle.split("/")[1]}
            </>
          ) : (
            cardData?.subTitle
          )
        }
        </S.Subtitle>
      </S.ContainerSubtitle>
      <S.ContainerTexts>
        <S.Texts>
          SOLICITAÇÃO:
          <S.Description>{helpRequest?.order?.option ?? ""}</S.Description>
        </S.Texts>
        <S.Texts>
          STATUS:
          <S.Description>
            {
              helpRequest?.status && orderStatusName[helpRequest?.status]
            }
          </S.Description>
        </S.Texts>
        <S.Texts>
          PEDIDO FEITO HÁ:
          <S.Description>{`${runningTime} minutos`}</S.Description>
        </S.Texts>
      </S.ContainerTexts>
      {(
        profileType === PROFILES_TYPES.ELDERLY && helpRequest?.status === orderStatusId.CANCELED
      ) ? (
        <S.CardButtom
          width="100%"
          borderRadius="0"
          onClick={handleCancelRequest}
          isLoading={loadingStore}
          disabled={isCanceled}
        >
          {!isCanceled ? (
            <>
              CANCELAR PEDIDO
              <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
            </>
          ) : (
            "Pedido Cancelado"
          )}
        </S.CardButtom>
        )
        : (
          <S.CardButtom
            width="100%"
            borderRadius="0"
            onClick={handleFinishedTask}
          >
            {!helpRequest?.startTime ? "Iniciar" : "Finalizar"}
            <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
          </S.CardButtom>
        )}
    </S.ContainerOrderCard>
  );
};

