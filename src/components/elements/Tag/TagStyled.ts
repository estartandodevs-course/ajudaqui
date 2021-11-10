import styled from 'styled-components';
import { Typography } from '../Typography';

interface ITagContainer {
  $isActive: boolean
}

export const TagContainer = styled.div<ITagContainer>`
  width: max-content;
  padding: 0 20px;
  height: 30px;
  border: ${({ theme }) => `1px solid ${theme.palette.colors.primaryVariant}`};
  display: flex;
  border-radius: 5px;
  background: ${(props) => (props.$isActive ? props.theme.palette.colors.secondaryVariant : props.theme.palette.colors.light.grayish)};
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TagContent = styled(Typography).attrs({
  variant: 'body1',
})`
  margin: 0;
  color: ${({ theme }) => theme.palette.colors.primaryVariant};
  font-size: ${({ theme }) => theme.typography.body1.fontSizeText};
`;
