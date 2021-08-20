
import React from "react";

import { differenceInMinutes, parseISO } from "date-fns";
import { useStore } from "../../contexts";
import * as S from "./HelpRequestCardStyled";

export const HelpRequestCard = ({
  variant = "default", color, colorTask, helpRequestData,
}) => {
  const { elderlys } = useStore();

  const {
    elderly: { id: elderlyId }, order, createdAt,
  } = helpRequestData;
  const elderlyProfile = elderlys.find((elderly) => elderly.id === elderlyId);


  const {
    name,
    photoURL,
  } = elderlyProfile;


  const runningTime = differenceInMinutes(new Date(), parseISO(createdAt));

  return (
    <>
      <S.CardWrapper>
        <S.Card variant={variant}>
          <S.UserInfos>
            <S.Request>
              <S.NameTask>
                <S.UserName>
                  {name}
                </S.UserName>
                <S.RequestedTask colorTask={colorTask}>
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
              <S.Image src={photoURL} />
            </S.UserImage>
          </S.UserInfos>
          <S.UserAction variant={variant}>
            <S.ActionDescription color={color}>
              {/* {action} */}
              {" "}
              {/* { src && <img src={src} alt="next" />} */}
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
