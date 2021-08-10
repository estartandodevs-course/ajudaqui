import * as S from "./ProfilePhotoStyled";

export const ProfilePhoto = ({ icon, children, ...restProps }) => {
  return (
    <S.ContainerPhoto>
      {icon
        ? <S.Icon src={icon} {...restProps} />
        : <S.Photo {...restProps} />}
      {children}
    </S.ContainerPhoto>
  );
};
