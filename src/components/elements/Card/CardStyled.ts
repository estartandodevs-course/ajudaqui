import styled, { css } from 'styled-components';
import { Typography } from '../Typography';

const VARIANTS = {
  default: css`
    width: 140px;
    height: 80px;
    flex-direction: column;
    text-align: center;
    background: ${({ theme }) => theme.palette.colors.gradientBackground};
    color: ${({ theme }) => theme.palette.colors.text};
  `,
  outlined: css`
    background: ${({ theme }) => theme.palette.colors.white};
    box-shadow: ${({ theme }) => theme.shadow};
    width: 140px;
    height: 155px;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: column;
    @media (max-width: 300px) {
      width: 120px;
    }
    color: ${({ theme }) => theme.palette.colors.text};
  `,
  secondary: css`
    background: ${({ theme }) => theme.palette.colors.secondary};
    flex-direction: column;
    width: 93px;
    height: 80px;
    text-align: center;
  `,
};
interface ICard {
  variant: string,
}

export const ContainerCard = styled.div<ICard>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 5px;
  ${({ variant }) => variant && VARIANTS[variant]}
`;

export const IconCard = styled.img`
  cursor: pointer;
`;

export const DescriptionCard = styled(Typography).attrs({
  variant: 'body1',
})`
  font-size: ${(props) => props.theme.typography.body1.fontSizeText};
  color: ${(props) => props.theme.palette.colors.text};
`;

export const DaysCard = styled(Typography).attrs({
  variant: 'body1',
})`
  color: ${({ theme }) => theme.palette.colors.text};
  font-weight: 700;
`;
