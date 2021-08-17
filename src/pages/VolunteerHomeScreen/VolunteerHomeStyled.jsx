import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerHelpCard = styled.div`
  width: 100%;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 22px 24px;
`;

export const Title = styled(Typography).attrs({
  variant: "h2",
})`
color: ${(props) => props.theme.palette.colors.text};
`;

export const Subtitle = styled(Typography).attrs({
  variant: "body1",
})`
color: ${(props) => props.theme.palette.colors.text};
`;

export const HelpAvailable = styled.div`
display: flex;
align-items: center;
gap: 4px;
margin: 0 24px 2px 24px;
`;

export const LocationIcon = styled.img`
width: 12px;
height: 12.82px;
`;

export const LocationText = styled(Typography).attrs({
  variant: "body1",
})`
color: ${(props) => props.theme.palette.colors.dark.gray};
font-size: 12px;
`;
