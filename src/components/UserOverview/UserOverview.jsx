import React from "react";
import * as S from "./UserOverviewStyled";
import { UserGrade } from "../UserGrade";

export const UserOverview = ({ userData }) => {
  const {
    name, photoURL, location, birthday, grade,
  } = userData;
  return (
    <S.ContainerProfile>
      <S.ImgProfile src={photoURL} alt="" />
      <S.ContainerData>
        <S.TitleProfile>
          Olá,
          {" "}
          {name}
        </S.TitleProfile>
        {birthday && (
        <S.Paragraph>
          {birthday}
          {" "}
          anos -
          {" "}
          {location.city}
        </S.Paragraph>
        )}
        <S.ContainerGrade>
          <S.Paragraph>Sua nota</S.Paragraph>
          <UserGrade grade={grade} width="18.88px" height="16px" />
        </S.ContainerGrade>
      </S.ContainerData>
    </S.ContainerProfile>
  );
};
