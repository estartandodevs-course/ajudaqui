import styled from 'styled-components';
import { Typography } from '../../components';

export const ContainerDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1199px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

export const Aside = styled.div`
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};

@media (max-width: 1199px) {
    display: none;
  }
`;

export const ImageAside = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ContainerPage = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
margin: 20px 24px;
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
  variant: 'h1',
})`
font-size: 26px;
color: ${(props) => props.theme.palette.colors.primaryVariant};
`;

export const CertificateText = styled(Typography).attrs({
  variant: 'h2',
})`
`;

export const Paragraph = styled(Typography).attrs({
  variant: 'body1',
})`
width: 272px;
text-align: center;

@media (min-width: 1199px) {
  width: 400px;
  text-align: left;
  }
`;

export const Paragraph2 = styled(Typography).attrs({
  variant: 'body1',
})`
width: 280px;
text-align: center;
font-size: 12px;

@media (min-width: 1199px) {
  width: 400px;
  }
`;

export const CertificateContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 11px;
width: 100%;
height: 44px;
padding: 0 15px;
border: 1px solid #7d6d96;
border-radius: 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media (min-width: 1199px) {
  padding: 0;
  }
`;

export const CertificateContent = styled.div`
font-size: 12px;
`;
export const ImageDownload = styled.img``;
