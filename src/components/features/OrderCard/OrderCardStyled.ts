import styled, { keyframes, css } from 'styled-components';
import { Reload } from '@styled-icons/ionicons-outline/';
import { theme } from '../../styles/themes';
import { Typography } from '../Typography';
import { Button } from '../Button';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const reload = css`
  animation: ${rotate} 2s linear infinite;
`;

export const ReloadCard = styled(Reload)`
  cursor: pointer;
  max-width: 30px;
 ${(props) => props.$isActive && reload};
  width: 100%;
  margin: 5px;
  position: absolute;
  top: 0;
  right: 0;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
`;

export const ContainerOrderCard = styled.div`
  width: 312px;
  height: 370px;
  background-color: #ffffff;
  border-radius: 5px 5px 9px 9px;
  border: ${(props) => `1px solid ${props.theme.palette.colors.primaryVariant}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin: 16px 0 16px 0;
`;

export const ImageDefault = styled.img`
  width: 64px;
  height: 64px;
  margin: 16px 0 16px 0;
`;

export const ContainerTitle = styled.div`
  width: 100%;
`;

export const Title = styled(Typography).attrs({
  variant: 'h1',
  color: theme.palette.colors.text,
})`
  text-align: center;
  font-size: 22px;
`;
export const ContainerSubtitle = styled.div`
  width: 310px;
  height: 40px;
  background-color: ${(props) => props.theme.palette.colors.secondaryVariant};
  margin: 8px 0 30px 0;
`;

export const Subtitle = styled(Typography).attrs({
  variant: 'h2',
  color: theme.palette.colors.dark.gray,
})`
  font-size: 16px;
  text-align: center;
  padding: 11px 0 11px 0;
`;

export const Texts = styled(Typography).attrs({
  variant: 'body1',
  as: 'div',
})`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: flex-end;
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 16px 24px;
`;

export const Description = styled(Typography).attrs({
  variant: 'body1',
  color: theme.palette.colors.light.gray,
})`
  align-self: center;
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Arrow = styled.img`
  margin-left: 8px;
`;

export const CardButtom = styled(Button)`
  border-radius: 0px 0px 9px 9px;
`;
