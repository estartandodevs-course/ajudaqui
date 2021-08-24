import styled from "styled-components";
import { Typography } from "../Typography";
import { Button } from "../ButtonComponent";

export const ContainerOrderCard = styled.div`
  width: 312px;
  height: 370px;
  background-color: #ffffff;
  border-radius: 5px 5px 9px 9px;
  border: ${(props) => `1px solid ${props.theme.palette.colors.primaryVariant}`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  variant: "h1",
  color: (props) => props.theme.palette.colors.text,
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
  variant: "h2",
  color: (props) => props.theme.palette.colors.dark.gray,
})`
  font-size: 16px;
  text-align: center;
  padding: 11px 0 11px 0;
`;

export const Texts = styled(Typography).attrs({
  variant: "body1",
})`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: flex-end;
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 16px 24px;
`;

export const Request = styled(Typography).attrs({
  variant: "body1",
  color: (props) => props.theme.palette.colors.light.gray,
})`
`;

export const Status = styled(Typography).attrs({
  variant: "body1",
  color: (props) => props.theme.palette.colors.light.gray,
})`
`;

export const Order = styled(Typography).attrs({
  variant: "body1",
  color: (props) => props.theme.palette.colors.light.gray,
})`
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
