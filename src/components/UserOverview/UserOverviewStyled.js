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
  @media (min: 1200px) {
  }
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
  border-radius: 50%;
  object-fit: cover;
 @media (min-width: 1200px) {
  width: 130px;
  height: 130px;
  }
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
@media (min-width: 1200px) {
 margin-top: 12px;
  }
  @media (max-width: 1199px) {
display: none;
  }
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  display: flex;
`;

export const ContainerOneVoluntary = styled.div`
  display: flex;
  align-items: center;
  padding-top: 14px;
  flex-direction: column;
  @media (min-width:1200px){
   flex-direction: row;
   gap: 6px;
   display: flex;
  justify-content: center;
}
`;
export const ImgProfileVoluntary = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 99px;
  object-fit: cover;
  margin-bottom: 5px;
  @media (min-width: 1200px) {
  width: 130px;
  height: 130px;
  }
`;
export const ContainerGradeVoluntary = styled.div`
  margin-bottom: 13px;
  @media (min-width: 1200px) {
    display: flex;
  flex-direction: row;
  }
`;

export const NomeProfileVoluntary = styled(Typography).attrs({
  variant: "h2",
})`
@media (min-width: 1200px) {
    margin-top: 36px;
    margin-right: 56px;
}
`;


export const ContentGradeNme = styled.div`
@media (min-width:1200px){
display: flex;
flex-direction: column;
align-items: center;
  }
`;
