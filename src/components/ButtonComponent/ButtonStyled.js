import styled from "styled-components";

export const Button = styled.button`
  width: ${({ width }) => width || "134px"};
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "#FFFFFF"};
  text-transform: uppercase;
  border-radius: 5px;
  height: 44px;
  font-size: 14px;
  background: ${({ background }) => background || "linear-gradient(126.22deg, #8360CA -2.64%, #A173FF 106.44%)"};
`;
