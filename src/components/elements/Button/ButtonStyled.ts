import styled, { css } from 'styled-components';

interface IButton {
  variant: string
}

const resetStyles = css`
  display: flex;
  align-items: center;

  width: max-content;
  height: 44px;

  padding: 14px 26px;
  border-radius: 5px;

  cursor: pointer;
  outline: none;
  border: none;

  text-transform: uppercase;
`;

const VARIANT = {
  default: css`
    color: ${({ theme }) => theme.palette.colors.white};
    background: ${({ theme }) => theme.palette.colors.secondary};
    `,
  outlined: css`
    color: ${({ theme }) => theme.palette.colors.emergency};
    border: ${({ theme }) => theme.palette.borders.emergency};
    background: ${({ theme }) => theme.palette.colors.white};
    `,
  emergency: css`
    background: ${({ theme }) => theme.palette.colors.emergency};
    color: ${({ theme }) => theme.palette.colors.white};
  `,
};

export const Button = styled.button<IButton>`
  ${resetStyles}
  ${({ variant }) => variant && VARIANT[variant]};
  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.palette.colors.secondaryVariant};
  }
`;
