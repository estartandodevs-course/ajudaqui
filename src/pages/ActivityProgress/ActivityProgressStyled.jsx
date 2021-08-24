import styled from "styled-components";
import { Typography } from "../../components";

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
`;


export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 33px;
`;

export const Title = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primaryVariant};

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled(Typography).attrs({
  variant: "body1",
})`
  text-align: center;
  color: ${(props) => props.theme.palette.colors.text};
  font-weight: 700;

  @media (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Paragraph = styled(Typography).attrs({
  variant: "body1",
})`
  color: ${(props) => props.theme.palette.colors.text};
  font-weight: 700;
  font-size: 12px;

  @media (min-width: 1200px) {
    font-size: 14px;
  }
`;
