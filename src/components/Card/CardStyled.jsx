import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

const variants = {
  default: css`
    width: 140px;
    height: 80px;
    flex-direction: column;
    text-align: center;
    background: ${(props) => {
    return props.theme.palette.colors.primaryVariant;
  }};
    color: ${(props) => props.theme.palette.colors.text};
  `,
  outlined: css`
    background: ${(props) => {
    return props.theme.palette.colors.white;
  }};
    box-shadow: ${(props) => props.theme.shadow};
    width: 140px;
    height: 155px;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: column;
    @media (max-width: 300px) {
      width: 120px;
    }
    color: ${(props) => props.theme.palette.colors.text};
  `,
  secondary: css`
    background: ${(props) => {
    return props.theme.palette.colors.secondary;
  }};
    flex-direction: column;
    width: 93px;
    height: 80px;
    text-align: center;
  `,
};

export const ContainerCard = styled.div`
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${(props) => props.variant && variants[props.variant]};
`;

export const IconCard = styled.img``;

export const DescriptionCard = styled(Typography).attrs({
  variant: "body1",
  weight: "500",
})`
  font-size: ${(props) => props.fontSize || props.theme.typography.body1.fontSizeText};
  color: ${(props) => props.color || props.theme.palette.colors.text};
`;

export const DaysCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.text,
  weight: "700",
})``;
