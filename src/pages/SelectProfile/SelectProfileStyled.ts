import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Typography } from '../../components';

export const ContainerSelectProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 100vh;
  @media(min-width: 576px) {
    justify-items: center;
  }
  @media(min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const SelectForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 14px 24px;
  gap: 42px;
  @media(min-width: 576px) {
    max-width: 400px;
  }
  @media(min-width: 1200px){
  justify-content: center;
  align-items: center;
  }
`;

export const SelectAside = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media(max-width: 1199px) {
    display: none;
  }
`;

export const ContentTitle = styled.div`
  width: 100%;

  @media(min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentChoice = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: -12px;
`;

export const TitleRegister = styled(Typography).attrs({
  variant: 'h1',
})`
  padding: 5px 0;
  color: ${(props) => props.theme.palette.colors.primary};
`;

export const ChoiceProfile = styled(Typography).attrs({
  variant: 'h2',
})`
@media(min-width: 1200px) {
  width: 100%;
  text-align: center;
}
`;

export const NextStep = styled(Link)`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.palette.colors.text};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
`;

export const IconNext = styled.img`
  text-decoration: none;
`;
