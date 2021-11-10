import { differenceInMinutes, parseISO } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { orderStatusName } from '../../../utils/constants';
import { useAuth, useStore } from '../../../contexts';
import * as S from './HelpRequestCardStyled';
import { ProfilePhoto } from '../../modules';
import { IHelpRequestCardProps } from './interfaces';

export const HelpRequestCard = ({
  helpRequestData, isVoluntary,
}: IHelpRequestCardProps) => {
  const { elderlys, handleUpdateSubscribe } = useStore();
  const { user } = useAuth();
  const navigation = useNavigate();

  const {
    elderly: { id: elderlyId }, order, createdAt, status,
  } = helpRequestData;

  const elderlyProfile = elderlys
    ?.find((elderly) => elderly.id === elderlyId);

  const runningTime = differenceInMinutes(new Date(), new Date(parseISO(createdAt)));

  const verifyWaitingStatus = orderStatusName[status] === 'aguardando' && !isVoluntary;

  const hasEmergency = order?.key === 'emergency';

  const verifyOrderStatus = (isVoluntary && 'default')
   || (hasEmergency && 'emergency')
   || (verifyWaitingStatus && 'aguardando')
   || 'default';

  console.debug(verifyOrderStatus);

  const actionsTypes = (isVoluntary && 'ajudando')
    || (hasEmergency && 'emergência')
   || (verifyWaitingStatus && 'aguardando')
   || 'ajudando';

  const handleSubscribe = async () => {
    if (!isVoluntary) await handleUpdateSubscribe(helpRequestData.id, user.id);
    if (hasEmergency) {
      return navigation(`emergency/${helpRequestData.id}`);
    }
    return navigation(`order-status/${helpRequestData.id}`);
  };

  return (
    <>
      <S.CardWrapper>
        <S.Card>
          <S.UserInfos>
            <S.Request>
              <S.NameTask>
                <S.UserName>
                  {elderlyProfile?.name}
                </S.UserName>
                <S.RequestedTask>
                  {order.option}
                </S.RequestedTask>
              </S.NameTask>
              <S.DistanceTimeContainer>
                <S.Distance>
                  Há 0km de distancia
                </S.Distance>
                <S.TaskTime>
                  {`Pedido feito há ${runningTime}MIN`}
                </S.TaskTime>
              </S.DistanceTimeContainer>
            </S.Request>
            <S.UserImage>
              { elderlyProfile?.photoURL ? (
                <S.Image
                  src={elderlyProfile?.photoURL}
                />
              )
                : <ProfilePhoto icon="/assets/svg/icon camera.svg" alt="camera" />}
            </S.UserImage>
          </S.UserInfos>
          <S.UserAction>
            <S.ActionDescription
              color={isVoluntary ? '#4e3681' : undefined}
              onClick={handleSubscribe}
            >
              {`${actionsTypes} ${!isVoluntary
                 && <img src="assets/svg/Vector.svg" alt="next" loading="lazy" />}`}
              {actionsTypes}
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
