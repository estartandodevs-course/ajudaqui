import React from "react";
import { differenceInYears } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import { ProfilePhoto } from "..";
import { useAuth } from "../../contexts";
import { UserGrade } from "../UserGrade";
import { PROFILES_TYPES } from "../../utils/constants";
import * as S from "./UserOverviewStyled";

export const UserOverview = ({ userData }) => {
  const {
    name, photoURL, location, birthday, grade,
  } = userData;

  const { profileType } = useAuth();

  const timeZone = "America/Sao_Paulo";

  const getYearBirthday = new Date(utcToZonedTime(birthday, timeZone));
  const getCurrentYear = new Date();

  const getAge = differenceInYears(getCurrentYear, getYearBirthday);


  return (
    <>
      {profileType === PROFILES_TYPES.ELDERLY ? (
        <S.ContainerProfile>
          {photoURL ? (
            <S.ImgProfile
              src={photoURL}
              alt={name}
            />
          ) : (
            <ProfilePhoto
              icon="/assets/svg/icon camera.svg"
              alt={name}
            />
          )}
          <S.ContainerData>
            <S.TitleProfile>{ `Olá, ${name}`}</S.TitleProfile>
            <S.Paragraph>
              {birthday
               && <>{`${getAge} anos - ${location.city}`}</>}
            </S.Paragraph>
            <S.ContainerGrade>
              <S.Paragraph>Sua nota</S.Paragraph>
              <UserGrade
                grade={grade}
                width="18.88px"
                height="16px"
              />
            </S.ContainerGrade>
          </S.ContainerData>
        </S.ContainerProfile>
      ) : (
        <S.ContainerOneVoluntary>
          {photoURL ? (
            <S.ImgProfileVoluntary
              src={photoURL}
              alt={name}
            />
          ) : (
            <ProfilePhoto
              icon="/assets/svg/icon camera.svg"
              alt={name}
            />
          )}
          <S.ContainerGradeVoluntary>
            <UserGrade
              grade={grade}
              width="25px"
              height="25px"
            />
          </S.ContainerGradeVoluntary>
          <S.NomeProfileVoluntary>
            {name}
          </S.NomeProfileVoluntary>
        </S.ContainerOneVoluntary>
      )}
    </>
  );
};
