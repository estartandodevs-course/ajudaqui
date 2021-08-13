import styled from "styled-components";
import { Typography } from "../Typography";

export const ContainerProfile = styled.div`
  display: flex;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  margin-left: 10px;
`;

export const ContainerGrade = styled.div`
  display: flex;
`;

export const ImgProfile = styled.img`
  width: 74.31px;
  height: 75px;
  border: 2px solid #5e38a8;
  border-radius: 100px;
  object-fit: cover;
  margin-top: 84px;
`;

export const TitleProfile = styled(Typography).attrs({
  variant: "h1",
  color: "#4E3681",
})`
  margin-bottom: 2px;
`;
export const Paragraph = styled(Typography).attrs({
  variant: "body1",
})`
  margin-bottom: 2px;
`;
