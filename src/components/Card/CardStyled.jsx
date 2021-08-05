import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

const variants = {
  default: css`
    background: ${(props) => {
    return props.theme.palette.colors.white;
  }};
  `,
  outlined: css`
    background: ${(props) => {
    return props.theme.palette.colors.white;
  }};
    box-shadow: ${(props) => props.theme.shadow};
  `,
  secondary: css`
    background: ${(props) => {
    return props.theme.palette.colors.secondary;
  }};
  `,
};

export const ContainerCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  display: flex;
  gap: 8px;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  ${(props) => props.variant && variants[props.variant]};
`;

export const IconCard = styled.img`
  max-width: 40px;
  max-height: 77px;
`;

export const DescriptionCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.text,
  weight: "500",
})`
   text-align: ${(props) => props.textAlign} ;
`;

export const DaysCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.text,
  weight: "700",
})``;
