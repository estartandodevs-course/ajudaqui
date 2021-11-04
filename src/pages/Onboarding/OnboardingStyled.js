import styled from 'styled-components';
import { Typography } from '../../components';

export const OnboardingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OnboardingMainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;
  margin: 42px 12px 0;
`;

export const PositionClose = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 42px 15px 0;
`;

export const ContentInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Close = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;

`;

export const OnboardingImage = styled.img`
  width: 162px;
  height: 162px;
`;

export const OnboardingTitle = styled(Typography).attrs({
  variant: 'h2',
})`
  color: ${(props) => props.theme.palette.colors.primaryVariant};
  margin: 0;
`;

export const OnboardingDescription = styled(Typography).attrs({
  variant: 'body1',
})`
  margin: 0;
`;

export const PositionButton = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
`;
