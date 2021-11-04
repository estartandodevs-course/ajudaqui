import styled from 'styled-components';
import { Typography } from '../../../components';

export const ContainerPageAside = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  @media (min-width: 576px) {
    justify-items: center;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
`;

export const ContainerPage = styled.div`
  width: 100%;
  padding: 0 20px;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HelpEmergency = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: ${(props) => props.theme.palette.colors.light.grayish};

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;
export const Text = styled(Typography).attrs({
  variant: 'h2',
})``;
export const Subtitle = styled(Typography).attrs({
  variant: 'body1',
})`
  width: 320px;
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;

export const HelpImage = styled.img``;

export const ContainerUserOverview = styled.div`
  margin-top: -50px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const ContainerOne = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 12px 0;
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerCards = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 1200px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const Paragraph = styled(Typography).attrs({
  variant: 'body1',
  weight: 700,
})`
  margin-bottom: 25px;
  text-align: center;
`;

export const Paragraph1 = styled(Typography).attrs({
  variant: 'body1',
})`
  text-align: center;
  margin-bottom: 17px;
`;

export const Paragraph2 = styled(Typography).attrs({
  variant: 'body1',
})`
  text-align: center;
  margin-bottom: 17px;

  @media (min-width: 576px) {
    display: none;
  }
`;

export const TextInformation = styled(Typography).attrs({
  variant: 'body1',
  weight: 700,
})`
  text-align: center;
`;

export const ContainerTwo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerTexts = styled.div`
  margin: 15px 0;

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const PositionButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 16px 0 44px 0;

  @media (min-width: 1200px) {
    display: none;
  }
`;
