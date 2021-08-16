
import React from "react";
import * as S from "./HelpRequestCardStyled";

export const HelpRequestCard = ({ elderlyInfos, variant, color }) => {
  const {
    name, task, distance, orderTime, photo, action,
  } = elderlyInfos;
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
                <S.RequestedTask>
                  {task}
                </S.RequestedTask>
              </S.NameTask>
              <S.DistanceTimeContainer>
                <S.Distance>
                  {`Há ${distance}`}
                </S.Distance>
                <S.TaskTime>
                  {`Pedido feito há ${orderTime}`}
                </S.TaskTime>
              </S.DistanceTimeContainer>
            </S.Request>
            <S.UserImage>
              <S.Image src={photo} />
            </S.UserImage>
          </S.UserInfos>
          <S.UserAction variant={variant}>
            <S.ActionDescription color={color}>
              {action}
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
