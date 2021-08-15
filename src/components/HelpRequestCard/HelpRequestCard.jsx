
import React from "react";
import * as S from "./HelpRequestCardStyled";

export const HelpRequestCard = () => {
  return (
    <>
      <S.CardWrapper>
        <S.Card>
          <S.UserInfos>
            <S.Request>
              <S.UserName>
                Maria Rita
              </S.UserName>
              <S.RequestedTask>
                Trocar gás
              </S.RequestedTask>
              <S.Distance>
                Há 3 km
              </S.Distance>
              <S.TaskTime>
                Pedido feito há 10min
              </S.TaskTime>
            </S.Request>
            <S.UserImage>
              <S.Image src="/assets/images/oldman-1.jpg" />
            </S.UserImage>
          </S.UserInfos>
          <S.UserAction>
            <S.ActionDescription>
              AJUDANDO
            </S.ActionDescription>
          </S.UserAction>
        </S.Card>
      </S.CardWrapper>
    </>
  );
};
