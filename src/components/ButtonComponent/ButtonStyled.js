import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "134px"};
  height: ${({ height }) => height || "44px"};
  border: ${({ border }) => border || "none"};
  color: ${(props) => props.color || props.theme.palette.colors.white};
  text-shadow: ${(props) => props.textShadow};
  box-shadow: ${(props) => props.shadow || props.theme.shadow};
  background: ${(props) => props.background || props.theme.palette.colors.gradientButton};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.typography.body1.fontFamily};
  border-radius: ${({ borderRadius }) => borderRadius || "5px"};

  height: 44px;
  font-weight: 500;
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  cursor: pointer;

  &:disabled {
    background: ${(props) => props.theme.palette.colors.primaryVariant};
    color: ${(props) => props.theme.palette.colors.light.grayish};
    cursor: not-allowed;
  }
`;
