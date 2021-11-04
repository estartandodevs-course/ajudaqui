import styled from 'styled-components';
import { Typography } from '../Typography';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 90px;
  gap: 6px;
`;

export const ContainerImage = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -50px;
  border: 2px solid #5e38a8;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.colors.white};

   @media (min-width: 1200px) {
    width: 120px;
    height: 120px;
    top: -72px;
   }
  `;

export const ImageLogo = styled.img`
  width: 60px;
  height: 60px;

@media (min-width: 1200px ) {
    width: 100px;
    height: 100px;
  }
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  width: 296px;
  height: 127px;
  background-image: url('/assets/svg/backgroundCurve.svg');

  @media (min-width: 1200px) {
    width: 457px;
    height: 172px;
    background-image: url('/assets/images/backgroundCurveDesktop.png');
    background-size: 100% 100%;
  }
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 290px;
  height: 64px;
  background-color: ${(props) => props.theme.palette.colors.secondaryVariant};
  border-radius: 5px 5px 40px 40px;

  @media (min-width: 1200px) {
    width: 457px;
    height: 68px;
  }
`;

export const Paragraph2 = styled(Typography).attrs({
  variant: 'body1',
})`
  width: 200px;
  text-align: center;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
@media (min-width: 1200px) {
    width: 342px;
    margin-top: 22px;
    margin-bottom: 25px;
  }
`;

export const Paragraph1 = styled(Typography).attrs({
  variant: 'h2',
})`
  width: 200px;
  text-align: center;
  margin-bottom: 20px;
  color: ${(props) => props.theme.palette.colors.primaryVariant};
@media (min-width: 1200px) {
    width: 342px;
    margin-bottom: 50px;
  }
`;
