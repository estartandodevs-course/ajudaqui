import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

export const ContainerCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  display: flex;
  gap: 8px;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-items: center;
  background: ${(props) => {
    return props.background || props.theme.palette.colors.gradientBackground;
  }};
  box-shadow: ${(props) => props.shadow || props.theme.shadow};
  border-radius: 5px;
`;

export const IconCard = styled.img`
  max-width: 40px;
  max-height: 77px;
`;

export const DescriptionCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.white,
  weight: "500",
})``;

export const DaysCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.text,
  weight: "700",
})``;
