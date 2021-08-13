import styled, { css } from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

const variants = {
  default: css`
    background: ${(props) => {
    return props.theme.palette.colors.primaryVariant;
  }};
  color:${(props) => props.theme.palette.colors.text};
  padding-top: 30px;
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
    @media(max-width: 300px){
      width: 120px;
    }
  color:${(props) => props.theme.palette.colors.text};
  `,
  secondary: css`
    background: ${(props) => {
    return props.theme.palette.colors.secondary;
  }};
  color:${(props) => props.theme.palette.colors.white};
  padding-top: 20px;
  width: 93px;
  height: 80px;
  text-align: center;
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
  max-width: 60px;
  max-height: 77px;
`;

export const DescriptionCard = styled(Typography).attrs({
  variant: "body1",
  weight: "500",
})`
   color: ${(props) => props.color || props.theme.palette.colors.text};
`;

export const DaysCard = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.text,
  weight: "700",
})``;
