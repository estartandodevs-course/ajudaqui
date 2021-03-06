import styled from 'styled-components';
import { Typography } from '../../elements';

export const ContentEvaluation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const IconsEvaluation = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

interface IDescriptionEvaluation {
  $active: boolean
}
export const DescriptionEvaluation = styled(Typography).attrs({
  variant: 'h2',
})<IDescriptionEvaluation>`
  color: ${(props) => (props.$active ? props.theme.palette.colors.primary : props.theme.palette.colors.secondary)};
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
`;
