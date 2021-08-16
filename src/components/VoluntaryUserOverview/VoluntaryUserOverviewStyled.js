import styled from "styled-components";
import { Typography } from "../Typography";

export const ContainerOne = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`;
export const ImgProfileVoluntary = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 99px;
  object-fit: cover;
  margin-bottom: 5px;
`;
export const ContainerGrade = styled.div`
  margin-bottom: 13px;
  `;

export const NomeProfile = styled(Typography).attrs({
  variant: "h2",
})`
`;
