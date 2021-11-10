import { INotificationProps } from './interfaces';
import * as S from './NotificationStyled';

export const Notification = ({ children }: INotificationProps) => (
  <S.ContainerNotification>
    <S.NotificationIcon src="/assets/svg/confirm.svg" alt="confirm" />
    <S.ContentDescription>
      <S.DescriptionNotification>
        {`${children} está a caminho para lhe ajudar`}
      </S.DescriptionNotification>
    </S.ContentDescription>
    <S.ContentClose>
      <S.Close src="/assets/svg/close.svg" alt="close" />
    </S.ContentClose>
  </S.ContainerNotification>
);
