import styled from "styled-components";
import { Typography } from "../../../components";

export const ContainerPage = styled.div`
width: 100%;
padding: 0 20px;
`;

export const ContainerUserOverview = styled.div`
margin-top: -50px;
margin-bottom: 32px;
display: flex;
justify-content: center;
width: 100%;

`;
export const ContainerOne = styled.div`
max-width: 100%;
margin: 0 auto;
padding: 12px 0;
border-top: ${(props) => props.borderTop};
border-bottom: ${(props) => props.borderBottom};
display: flex;
flex-direction: column;
justify-content: center;
`;

export const ContainerCards = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
margin-bottom: 30px;
`;

export const Paragraph = styled(Typography).attrs({
  variant: "body1",
  weight: 700,
})`
  margin-bottom: 25px;
  text-align: center;
`;

export const Paragraph1 = styled(Typography).attrs({
  variant: "body1",
})`
  text-align: center;
  margin-bottom: 17px;
`;

export const TextInformation = styled(Typography).attrs({
  variant: "body1",
  weight: 700,
})`
  text-align: center;
`;

export const ContainerTwo = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const ContainerTexts = styled.div`
margin: 15px 0;
`;

export const PositionButton = styled.div`
display: flex;
width: 100%;
justify-content:center;
margin: 16px 0 44px 0;
`;

