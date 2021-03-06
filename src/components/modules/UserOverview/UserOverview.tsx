import { differenceInYears } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { ProfilePhoto } from '..';
import { useAuth } from '../../../contexts';
import { UserGrade } from '../UserGrade';
import { PROFILES_TYPES } from '../../../utils/constants';
import * as S from './UserOverviewStyled';

interface Location {
  city?: string,
}
interface UserData {
  name: string,
  photoURL?: string,
  location?: Location,
  grade?: number,
  birthday?: string,
}
interface IUserOverview {
  userData: UserData
}

export const UserOverview = ({ userData }: IUserOverview) => {
  const {
    name, photoURL, location, birthday, grade,
  } = userData;

  const { profileType } = useAuth();

  const timeZone = 'America/Sao_Paulo';

  const getUserAge = (_birthday) => {
    if (_birthday) {
      const getYearBirthday = new Date(utcToZonedTime(_birthday, timeZone));
      const getCurrentYear = new Date();
      const getAge = differenceInYears(getCurrentYear, getYearBirthday);
      return getAge;
    }
    return null;
  };

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
               && <>{`${getUserAge(birthday)} anos - ${location.city}`}</>}
            </S.Paragraph>
            <S.ContainerGrade>
              <S.Paragraph>Sua nota</S.Paragraph>
              <UserGrade
                grade={grade}
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
          <S.ContentGradeName>
            <S.NomeProfileVoluntary>
              { `Olá, ${name}`}
            </S.NomeProfileVoluntary>
            <S.ContainerGradeVoluntary>
              <S.Paragraph>Sua nota</S.Paragraph>
              <UserGrade
                grade={grade}

              />
            </S.ContainerGradeVoluntary>
          </S.ContentGradeName>
        </S.ContainerOneVoluntary>
      )}
    </>
  );
};
