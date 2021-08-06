import styled from "styled-components";
import { Typography } from "../../../components";


export const ContainerRegistrations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 24px;
  z-index: 1;
`;

export const ContentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
`;


export const TitleRegistrations = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primary};
`;


export const DescriptionRegistrations = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  color: ${(props) => props.theme.palette.colors.primary};
`;
