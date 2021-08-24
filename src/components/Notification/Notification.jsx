import PropTypes from "prop-types";
import * as S from "./NotificationStyled";

export const Notification = ({ user, ...restProps }) => {
  return (
    <S.ContainerNotification {...restProps}>
      <S.NotificationIcon src="/assets/svg/confirm.svg" alt="confirm" />
      <S.ContentDescription>
        <S.DescriptionNotification>
          <S.UserName>
            {user}
          </S.UserName>
          {" "}
          está a caminho para lhe ajudar
        </S.DescriptionNotification>
      </S.ContentDescription>
      <S.ContentClose>
        <S.Close src="/assets/svg/close.svg" alt="close" />
      </S.ContentClose>
    </S.ContainerNotification>
  );
};

Notification.propTypes = {
  user: PropTypes.string,
};


