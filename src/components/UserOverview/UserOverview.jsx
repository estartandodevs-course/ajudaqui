import React from "react";
// import * as S from "./UserOverview.styled";
import { userData } from "../../_mock/userData";
import { UserGrade } from "../UserGrade";
import {
  ContainerData, ContainerGrade, ContainerProfile, ImgProfile, P, TitleProfile,
} from "./UserOverview.styled";

export const UserOverview = () => {
  const {
    name, img, location, idade,
  } = userData;
  return (
    <ContainerProfile>
      <ImgProfile src={img} alt="" />
      <ContainerData>
        <TitleProfile>
          Olá,
          {" "}
          {name}
        </TitleProfile>
        <P>
          {idade}
          {" "}
          anos -
          {" "}
          {location.city}
        </P>
        <ContainerGrade>
          <P> Sua nota </P>
          <UserGrade grade={4} width="18.88px" height="16px" />
        </ContainerGrade>
      </ContainerData>
    </ContainerProfile>
  );
};
