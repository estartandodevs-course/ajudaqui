import { ReactNode } from 'react';
import * as S from './ProfilePhotoStyled';

interface IProfilePhotoProps {
  icon: string,
  children?: ReactNode,
  alt: string,
}

export const ProfilePhoto = ({ icon, children, ...restProps }: IProfilePhotoProps) => (
  <S.ContainerPhoto {...restProps}>
    {icon
      ? <S.Icon src={icon} {...restProps} />
      : <S.Photo {...restProps} />}
    {children}
  </S.ContainerPhoto>
);
