import styled from "styled-components";
import { Typography } from "../Typography";

export const ContainerProfile = styled.div`
  display: flex;
  margin-top: 84px;
  width: 100%;
  justify-content: center;
  gap: 11px;
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

export const ContainerGrade = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgProfile = styled.img`
  width: 75px;
  height: 75px;
  border: 2px solid #5e38a8;
  border-radius: 9999px;
  object-fit: cover;
`;

export const TitleProfile = styled(Typography).attrs({
  variant: "h2",
})`
  padding-bottom: 4px;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
`;
export const Paragraph = styled(Typography).attrs({
  variant: "body1",
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  display: flex;
`;

export const ContainerOneVoluntary = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  flex-direction: column;
`;
export const ImgProfileVoluntary = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 99px;
  object-fit: cover;
  margin-bottom: 5px;
`;
export const ContainerGradeVoluntary = styled.div`
  margin-bottom: 13px;
`;

export const NomeProfileVoluntary = styled(Typography).attrs({
  variant: "h2",
})``;
