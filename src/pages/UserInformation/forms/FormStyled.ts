import styled from 'styled-components';
import { Typography } from '../../../components';

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d8cdee;
  gap: 24px;
  width: 100%;
  padding-top: 24px;
  height: 100%;
`;

export const ContactSection = styled.div`
  width: 100%;
  border-top: 1px solid #d8cdee;
  padding: 20px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NewContact = styled.div`
  color: ${(props) => props.theme.palette.colors.primary};
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
  margin-bottom: 28px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextAreaTitle = styled(Typography).attrs({
  variant: 'body1',
})`
  padding-bottom: 4px;
  font-weight: 700;
  color: ${(props) => props.theme.palette.colors.text};
`;
