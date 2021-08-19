import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Aside = styled.div`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};

  @media (max-width: 1200px) {
    display: none;
  }
`;
export const AsideImage = styled.img`
position: absolute;
bottom: 0;
right: 0;
`;

export const ContainerAskForHelp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 24px;
  z-index: 1;

  @media (min-width: 1200px) {
  width: 500px;
  justify-content: center;
  text-align: center;
  }
`;

export const Text = styled(Typography).attrs({
  variant: "body1",
})`
  margin-bottom: 16px;

  @media (min-width: 1200px) {
  margin-bottom: 50px;
  font-size: 24px;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
  font-weight: 400;
  }
`;


export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 24px;

  @media (min-width: 1200px) {
  margin-bottom: 35px;
  }
`;

export const PositionButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  @media (min-width: 1200px) {
  margin-top: 20px;
  }
`;
