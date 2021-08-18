import styled from "styled-components";
import { Typography } from "../../../components/Typography";

export const ContainerPage = styled.div`
width: 100%;
padding: 0 20px;
`;

export const ContainerHelpCard = styled.div`
  width: 100%;
`;

export const ContainerCard = styled.div`
margin:32px 0 24px 0;
display: flex;
justify-content: space-around;
`;

export const NumberCard = styled.p`
font-weight: bold;
margin-bottom: 4px;
`;

export const ContentTextInterests = styled.div`
margin-bottom: 12px;
`;
export const ContainerTag = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 43px;
`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
margin-bottom: 32px;
`;
export const ContainerImageElderly = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
 `;

export const Text = styled(Typography).attrs({
  variant: "body1",
})`
font-weight: bold;
`;

export const ContentTextPeople = styled.div`
margin-bottom: 6px;
`;
export const ImageElderly = styled.img`
width: 35px;
height: 35px;
border-radius: 100px;
object-fit: cover;
margin-bottom: 24px;
`;
