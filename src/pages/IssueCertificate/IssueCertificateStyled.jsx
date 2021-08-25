import styled from "styled-components";
import { Typography } from "../../components";

export const ContainerPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20px;
gap: 30px;
`;

export const ContainerImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 80px;
height: 80px;
border: 2px solid #5e38a8;
border-radius: 50%;
background-color: ${(props) => props.theme.palette.colors.white};
`;

export const ImageLogo = styled.img`
width: 60px;
height: 60px;
`;

export const Ellipsis = styled.img``;


export const VoluntaryName = styled(Typography).attrs({
  variant: "h1",
})`
font-size: 26px;
color: ${(props) => props.theme.palette.colors.primaryVariant};
`;

export const CertificateText = styled(Typography).attrs({
  variant: "h2",
})`
`;

export const Paragraph = styled(Typography).attrs({
  variant: "body1",
})`
width: 272px;
text-align: center;
`;

export const Paragraph2 = styled(Typography).attrs({
  variant: "body1",
})`
width: 280px;
text-align: center;
font-size: 12px;
`;
