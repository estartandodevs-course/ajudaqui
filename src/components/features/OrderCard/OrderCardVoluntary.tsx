import { parseISO, differenceInMinutes } from 'date-fns';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth, useStore } from '../../../contexts';
import { StoreContext } from '../../../contexts/Store';
import {
  mappedVoluntaryCardInfoByStatus,
  orderStatusId,
  orderStatusName,
  PROFILES_TYPES,
} from '../../../utils/constants';
import { IOrderCardProps } from './interfaces';
import * as S from './OrderCardStyled';

export const OrderCardVoluntary = ({ helpRequest }: IOrderCardProps) => {
  const { profileType } = useAuth();
  const {
    handleCancelOrder, loadingStore, elderlys,
  } = useStore();
  const navigation = useNavigate();
  const { handleMount } = useContext(StoreContext);
  const { helpRequestId } = useParams();
  const runningTime = differenceInMinutes(new Date(), parseISO(helpRequest?.createdAt));
  const isCanceled = helpRequest?.status === orderStatusId.CANCELED;
  const hasFinished = !!(helpRequest?.startTime && helpRequest?.endTime);
  const hasEvaluated = !!helpRequest?.elderly?.evaluation;
  const hasConcluded = helpRequest?.status === orderStatusId.CONCLUDED;

  const elderlyProfileData = elderlys?.find((elderly) => (
    elderly.id === helpRequest?.elderly?.id
  ));

  const handleFinishedTask = (): unknown => {
    switch (profileType) {
      case PROFILES_TYPES.ELDERLY: {
        if (hasFinished) {
          return navigation(`/screen-evaluation/${helpRequestId}`);
        }
        break;
      }
      case PROFILES_TYPES.VOLUNTARY: {
        if (hasFinished) {
          return navigation(`/screen-evaluation/${helpRequestId}`);
        }

        return navigation(`/activity-progress/${helpRequestId}`);
      }
      default:
        break;
    }

    return 1;
  };

  const handleCancelRequest = async (): Promise<void> => {
    await handleCancelOrder(helpRequestId);
  };

  const cardData = mappedVoluntaryCardInfoByStatus(helpRequest?.status, elderlyProfileData);

  return (
    <S.ContainerOrderCard>
      <S.ReloadCard
        $isActive={loadingStore}
        onClick={async () => {
          handleMount();
        }}
      />
      <S.ContainerIcon>
        { (helpRequest?.photoURL && !isCanceled) ? (
          <S.Icon src={helpRequest?.photoURL} alt={helpRequest?.name} />
        ) : (
          <S.ImageDefault
            src={`/assets/svg/${!isCanceled ? 'icon-ok.svg' : 'icon-cancelado.svg'}`}
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
          cardData?.subTitle.includes('/') ? (
            <>
              <strong>{cardData?.subTitle.split('/')[0]}</strong>
              {cardData?.subTitle.split('/')[1]}
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
          <S.Description>{helpRequest?.order?.option ?? ''}</S.Description>
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
      {/* {isCanceled && (
        <S.CardButtom
          width='100%'
          borderRadius='0'
          onClick={handleCancelRequest}
          isLoading={loadingStore}
          disabled={isCanceled}
        >
          Pedido Cancelado
        </S.CardButtom>
      )} */}
      {(helpRequest?.status === orderStatusId.WAITING) && (
        <S.CardButtom
          onClick={handleCancelRequest}
          isLoading={loadingStore}
          disabled={isCanceled}
        >
          CANCELAR PEDIDO
          <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
        </S.CardButtom>
      )}
      {!hasFinished && !hasEvaluated && !hasConcluded && !isCanceled && (
        <S.CardButtom
          onClick={handleFinishedTask}
        >
          Iniciar
          <S.Arrow src="/assets/svg/right arrow.svg" alt="Arrow" />
        </S.CardButtom>
      )}
    </S.ContainerOrderCard>
  );
};
