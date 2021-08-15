import styled from "styled-components";
import { theme } from "../../styles/themes";
import { Typography } from "..";

export const CardWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 20px 24px;
`;

export const Card = styled.div`
width: 312px;
height: 175px;
border: 1px solid purple;
border-radius: 5px 5px 9px 9px;
`;

export const UserAction = styled.div`
width: 100%;
height: 24%;
border-top: 1px solid;
border-radius: 0 0 9px 9px;
border-image: ${(props) => `${props.theme.palette.colors.gradientBackground} 1`};
background-color: ${(props) => `${props.theme.palette.colors.secondaryVariant} `};
`;

export const ActionDescription = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.primary,
})`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`;

export const UserInfos = styled.div`
padding: 15px 10px;
display: flex;
width: 100%;
height: 76%;
`;

export const Request = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: none;
flex: 2;
`;

export const UserName = styled(Typography).attrs({
  variant: "body1",
})`
font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
font-weight: 700;
margin-bottom: 0;
`;

export const RequestedTask = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.light.gray,
})`
font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
`;

export const Distance = styled(Typography).attrs({
  variante: "body",
})`
text-transform: uppercase;
font-weight: 700;
margin-bottom: 0;
font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
`;

export const TaskTime = styled(Typography).attrs({
  variant: "body1",
  color: theme.palette.colors.light.gray,
})`
text-transform: uppercase;
font-size: ${(props) => props.theme.typography.body1?.fontSizeText};
margin-bottom: 0;
`;

export const UserImage = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex: 1;
border: none;
`;

export const Image = styled.img`
width: 90px;
height: 90px;
border-radius: 100%;
object-fit: cover;
`;
