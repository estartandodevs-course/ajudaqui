
import React from "react";
import * as S from "./HelpRequestCardStyled";

export const HelpRequestCard = ({
  variant, color, colorTask, name, task, distance, orderTime, photo, action, src,
}) => {
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
              {" "}
              { src && <img src={src} alt="next" />}
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
