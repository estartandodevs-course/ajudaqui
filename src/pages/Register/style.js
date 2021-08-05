import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "../../components";

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 62px 24px;
  gap: 42px;
`;

export const ContentTitle = styled.div`
  width: 100%;  
`;

export const ContentChoice = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: -12px;
`;

export const TitleRegister = styled(Typography).attrs({
  variant: "h1",
})`
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const ChoiceProfile = styled(Typography).attrs({
  variant: "h2",
})``;

export const NextStep = styled(Link)`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;

export const IconNext = styled.img`
`;
