import styled from 'styled-components';
import { Typography } from '../../components';

export const TitlePage = styled(Typography).attrs({
  variant: 'h2',
  color: '#4E3681',
})`
  margin: 18px 24px;
`;

export const ParagraphPage = styled(Typography).attrs({
  variant: 'body1',
  color: '#4E3681',
})`
  margin-bottom: 35px;
  font-size: 12px;
  margin: 15px 24px 22px 24px;
`;

export const ContainerInput = styled.div`
  width: 312px;
  margin: 0 24px;
`;

export const ContainerButton = styled.div`
  margin: 64px 99px;
`;
