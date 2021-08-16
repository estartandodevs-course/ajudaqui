import React from "react";
import * as S from "./UserOverviewStyled";
import { UserGrade } from "../UserGrade";

export const UserOverview = ({ userData, typePerson }) => {
  const {
    name, photoURL, location, birthday, grade,
  } = userData;
  return (
    <>
      {typePerson === "idoso" ? (

        <S.ContainerProfile>
          <S.ImgProfile src={photoURL} alt={name} />
          <S.ContainerData>
            <S.TitleProfile>
              {`Olá, ${name}`}
            </S.TitleProfile>
            <S.Paragraph>
              {birthday
        && (
        <>
          {`${birthday} anos - ${location.city}`}
        </>
        )}
            </S.Paragraph>
            <S.ContainerGrade>
              <S.Paragraph>Sua nota</S.Paragraph>
              <UserGrade grade={grade} width="18.88px" height="16px" />
            </S.ContainerGrade>
          </S.ContainerData>
        </S.ContainerProfile>
      ) : null}
    </>
  );
};
