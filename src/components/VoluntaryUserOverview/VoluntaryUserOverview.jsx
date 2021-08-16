import React from "react";
import * as S from "./VoluntaryUserOverviewStyled";
import { UserGrade } from "../UserGrade";

export const VoluntaryUserOverview = ({ userData }) => {
  const {
    name, photoURL, grade,
  } = userData;
  return (
    <S.ContainerOne>
      <S.ImgProfileVoluntary src={photoURL} alt={name} />
      <S.ContainerGrade>
        <UserGrade grade={grade} width="25px" height="25px" />
      </S.ContainerGrade>
      <S.NomeProfile>
        {`${name}`}
      </S.NomeProfile>
    </S.ContainerOne>

  );
};
