import React from "react";
import * as S from "./UserOverview.styled";
import { UserGrade } from "../UserGrade";

export const UserOverview = (props) => {
  const {
    name, img, location, idade,
  } = props;
  return (
    <S.ContainerProfile>
      <S.ImgProfile src={img} alt="" />
      <S.ContainerData>
        <S.TitleProfile>
          Olá,
          {" "}
          {name}
        </S.TitleProfile>
        <S.Paragraph>
          {idade}
          {" "}
          anos -
          {" "}
          {location}
        </S.Paragraph>
        <S.ContainerGrade>
          <S.Paragraph> Sua nota </S.Paragraph>
          <UserGrade grade={4} width="18.88px" height="16px" />
        </S.ContainerGrade>
      </S.ContainerData>
    </S.ContainerProfile>
  );
};
