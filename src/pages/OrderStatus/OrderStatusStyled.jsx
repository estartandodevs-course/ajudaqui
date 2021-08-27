import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Typography).attrs({
  variant: "h2",
})`
color: ${(props) => props.theme.palette.colors.primaryVariant};
margin: 32px 0;
`;

export const Subtitle = styled(Typography).attrs({
  variant: "body1",
})`
width: 312px;
margin-top: 20px;
color: ${(props) => props.theme.palette.colors.light.gray};

@media (min-width: 1199px) {
    display: none;
  }
`;

export const ContainerDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;
export const Aside = styled.div`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};

@media (max-width: 1199px) {
    display: none;
  }
`;

export const ImageAside = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: inherit
`;
