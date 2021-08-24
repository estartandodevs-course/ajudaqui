import React from "react";
import { differenceInMinutes, parseISO } from "date-fns";
import { useHistory } from "react-router-dom";
import { orderStatusName } from "../../utils/constants";
import { useAuth, useStore } from "../../contexts";
import * as S from "./HelpRequestCardStyled";
import { ProfilePhoto } from "../ProfilePhoto";

export const HelpRequestCard = ({
  helpRequestData, isVoluntary,
}) => {
  const { elderlys, handleUpdateSubscribe } = useStore();

  const { user } = useAuth();

  const { push } = useHistory();

  const {
    elderly: { id: elderlyId }, order, createdAt, status,
  } = helpRequestData;

  const elderlyProfile = elderlys
    .find((elderly) => elderly.id === elderlyId);

  const {
    name,
    photoURL,
  } = elderlyProfile;

  const runningTime = differenceInMinutes(new Date(), parseISO(createdAt));

  const verifyWaitingStatus = orderStatusName[status] === "aguardando" && !isVoluntary;

  const hasEmergency = order?.key === "emergency";

  const verifyOrderStatus = (hasEmergency && "emergency")
   || (verifyWaitingStatus && "aguardando")
   || "default";

  const actionsTypes = (hasEmergency && "emergência")
   || (verifyWaitingStatus && "aguardando")
   || "ajudando";

  const handleSubscribe = async () => {
    await handleUpdateSubscribe(helpRequestData.id, user.id);
    push(`order-status/${helpRequestData.id}`);
  };

  return (
    <>
      <S.CardWrapper>
        <S.Card
          $variant={verifyOrderStatus}
        >
          <S.UserInfos>
            <S.Request>
              <S.NameTask>
                <S.UserName>
                  {name}
                </S.UserName>
                <S.RequestedTask
                  $colorTask={hasEmergency ? "#BC1610" : undefined}
                >
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
              { photoURL ? (
                <S.Image
                  src={photoURL}
                />
              )
                : <ProfilePhoto icon="/assets/svg/icon camera.svg" alt="camera" />}
            </S.UserImage>
          </S.UserInfos>
          <S.UserAction
            $variant={verifyOrderStatus}
          >
            <S.ActionDescription
              color={isVoluntary ? "#4e3681" : undefined}
              onClick={handleSubscribe}
            >
              {actionsTypes}
              {!isVoluntary
                 && <img src="assets/svg/Vector.svg" alt="next" loading="lazy" />}
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
