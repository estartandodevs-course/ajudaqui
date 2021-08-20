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

export const AsideImage = styled.img`
position: absolute;
bottom: 0;
right: 0;
`;


export const ContainerScreenEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  height: 100%;
  padding: 14px 24px;

  @media (min-width: 1200px) {
    width: 400px;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

`;

export const ContainerEvaluation = styled.div`
  display: flex;
  width: min-content;
  gap: 20px;
  @media(max-width: 720px) {
    gap: 10px;
  }
`;

export const TitleHelp = styled(Typography).attrs({
  variant: "h2",
})`
  color: ${(props) => props.theme.palette.colors.primaryVariant};

  @media (min-width: 1200px) {
  font-size: 24px;
  }
`;

export const DescriptionPersonHelp = styled(Typography).attrs({
  variant: "body1",
})`
  font-weight: 700;
  max-width: 190px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 1200px) {
    font-size: 18px;
    max-width: 100%;
  }
`;

export const UserHelped = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 9999px;
  margin-bottom: 16px;

  @media (min-width: 1200px) {
  width: 160px;
  height: 160px;
  }
`;

export const ContentEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;

  @media (min-width: 1200px) {
  gap: 20px;
  }
`;

export const NamePersonHelp = styled(Typography).attrs({
  variant: "body1",
})`

@media (min-width: 1200px) {
  font-size: 18px;
  }
`;

export const PositionButton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%auto;

  @media (min-width: 1200px) {
  margin-top: 20px;
  }
`;
