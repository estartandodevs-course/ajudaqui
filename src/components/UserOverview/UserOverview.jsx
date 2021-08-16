import React from "react";
import * as S from "./UserOverviewStyled";
import { UserGrade } from "../UserGrade";
import { useAuth } from "../../contexts";

export const UserOverview = ({ userData }) => {
  const {
    name, photoURL, location, birthday, grade,
  } = userData;

  const { profileType } = useAuth();

  return (
    <>
      {!profileType === "elderly" ? (

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
      ) : (
        <S.ContainerOneVoluntary>
          <S.ImgProfileVoluntary src={photoURL} alt={name} />
          <S.ContainerGradeVoluntary>
            <UserGrade grade={grade} width="25px" height="25px" />
          </S.ContainerGradeVoluntary>
          <S.NomeProfileVoluntary>
            {`${name}`}
          </S.NomeProfileVoluntary>
        </S.ContainerOneVoluntary>
      )}
    </>
  );
};
