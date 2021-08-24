import styled from "styled-components";
import { Typography } from "../Typography";
import { Button } from "../ButtonComponent";

export const Card = styled.div`
  border: 1px solid #BC1610;
  width: 312px;
  height: max-content;
  border-radius: 5px 5px 9px 9px;
  display: flex;
  flex-direction: column;
  margin-top:60px;
  `;

export const ContainerProfile = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  position: relative;
  `;
export const ImageElderly = styled.img`
  border-radius: 100%;
  width: 78px;
  height: 78px;
  object-fit: cover;
  border: 1px solid #BC1610;
  margin-top: -38px;
  position: absolute;

`;
export const NameElderly = styled(Typography).attrs({
  variant: "body1",
})`
  text-align: center;
  margin-top: 43px;
  font-weight: 700;
  color: ${(props) => props.theme.palette.colors.text};
`;

export const ContainerProblem = styled.div`
  margin-bottom: 30px;
`;

export const ContainerMedicines = styled.div`
  margin-bottom: 30px;
`;

export const ContainerEmergency = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
  margin-bottom: 25px;
`;
export const IconEmergency = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  margin-top: -4px;
`;
export const Icons = styled.img`
  margin-left: 10px;
  width: 16px;
  height: 16px;
  margin-top: -4px;
`;
export const TextsTitles = styled(Typography).attrs({
  variant: "body1",
})`
  color: ${(props) => props.theme.palette.colors.emergency};
  font-weight: bold;
  font-size: 16px;
  padding-left: 20px;
  `;
export const TextTitleEmergency = styled(Typography).attrs({
  variant: "body1",
})`
  color: ${(props) => props.theme.palette.colors.emergency};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
  padding-left: 20px;
  `;


export const Texts = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  color: #0C011B;
  font-size: 16px;
  padding-left: 20px;

`;

export const Problem = styled.p``;

export const ContainerTextFinal = styled.div`
  width: 278px;
  height: 48px;
  margin-bottom: 24px;
  padding-left: 20px;

`;
export const TextFinal = styled.p`
  font-size: 12px;
  color: #47454F;
  line-height: 16px;
 `;


export const ContentButtom = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 0px 0px 9px 9px;
  background: ${(props) => props.theme.palette.colors.emergency}
`;

export const ContentArrow = styled.img`
  margin-left: 8px;
`;
