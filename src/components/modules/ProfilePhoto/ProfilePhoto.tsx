import { ImgHTMLAttributes, ReactNode } from 'react';
import * as S from './ProfilePhotoStyled';

interface IProfilePhotoProps extends ImgHTMLAttributes<HTMLImageElement> {
  icon: string,
  children?: ReactNode,
}

export const ProfilePhoto = ({ icon, children }: IProfilePhotoProps) => (
  <S.ContainerPhoto>
    {icon
      ? <S.Icon src={icon} />
      : <S.Photo />}
    {children}
  </S.ContainerPhoto>
);
