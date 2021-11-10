import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 44px;
  border: none;
  color: ${({ theme }) => theme.palette.colors.white};
  text-shadow: none;
  box-shadow: ${({ theme }) => theme.shadow};
  background: ${({ theme }) => theme.palette.colors.gradientButton};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.typography.body1.fontFamily};
  border-radius: 5px;

  height: 44px;
  font-weight: 500;
  font-size: ${({ theme }) => theme.typography.body1.fontSizeSubtitles};
  cursor: pointer;

  &:disabled {
    background: ${({ theme }) => theme.palette.colors.primaryVariant};
    color: ${({ theme }) => theme.palette.colors.light.grayish};
    cursor: not-allowed;
  }
`;
