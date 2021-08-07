import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "134px"};
  height: ${({ height }) => height || "44px"};
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "#FFFFFF"};
  box-shadow: ${({ shadow }) => shadow || "0px 4px 4px rgba(0, 0, 0, 0.2)"};
  background: ${({ background }) => background || "linear-gradient(126.22deg, #8360CA -2.64%, #A173FF 106.44%)"};
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;
