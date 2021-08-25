import styled from "styled-components";
import { Typography } from "../../../components";

export const PagesContainer = styled.div`
width: 100%;
display: flex;
`;

export const ContainerPage = styled.div`
  @media (min-width: 1200px){
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
}
`;

export const ContainerHelpCard = styled.div`
  width: 100%;
`;

export const ContainerTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 22px 24px;
  @media (min-width: 1200px) {
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 31px;
  }
`;

export const Title = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.text};
   @media (min-width: 1200px) {
    color: ${(props) => props.theme.palette.colors.primaryVariant};
  }
`;

export const Subtitle = styled(Typography).attrs({
  variant: "body1",
})`
  color: ${(props) => props.theme.palette.colors.text};
  @media (min-width: 1200px) {
    color: ${(props) => props.theme.palette.colors.primaryVariant};
    margin-top: 6px;
  }
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

export const ContainerPageTwo = styled.div`
  width: 100%;
  background-color: #F9F7FB;
  display: flex;
  align-items: flex-end;
  @media (max-width: 1199px) {
    display: none;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;
