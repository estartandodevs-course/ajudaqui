import styled from "styled-components";
import { Typography } from "../Typography";


export const ContainerProfile = styled.div`
display: flex;
width: 100%;
height: 75px;
`;

export const ContainerData = styled.div`
display: flex;
flex-direction: column;
margin-top: 78px;
margin-left: 10px;
`;
export const ContainerGrade = styled.div`
display: flex;
justify-content: space-between;
`;

export const ImgProfile = styled.img`
width: 74.31px;
height: 75px;
border: 2px solid #5E38A8;
border-radius: 100px;
object-fit: cover;
margin-top: 78px;
margin-left: 20px;
`;
export const TitleProfile = styled(Typography).attrs({
  variant: "h1",
  color: "#4E3681",
})`
margin-bottom: 4px;
  `;
export const P = styled(Typography).attrs({
  variant: "body1",
})`
margin-bottom: 4px;
  `;

