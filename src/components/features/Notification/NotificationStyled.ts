import styled from 'styled-components';
import { Typography } from '../../elements';

export const ContainerNotification = styled.div`
  max-width: 312px;
  height: 52px;
  background: ${({ theme }) => theme.palette.colors.white};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme }) => `1px solid ${theme.palette.colors.primary}`};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DescriptionNotification = styled(Typography).attrs({
  variant: 'body1',
})``;

export const UserName = styled(Typography).attrs({
  variant: 'body1',
  weight: 700,
})`
  display: inline;
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 20px;
`;

export const NotificationIcon = styled.img`
  width: 29px;
  height: 29px;
  margin-left: 16px;
`;

export const ContentClose = styled.div`
  height: 100%;
  display: flex;
  padding: 5px;
`;

export const Close = styled.img`
  width: 12px;
  height: 12px;
`;
