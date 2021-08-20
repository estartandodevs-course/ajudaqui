import styled from "styled-components";

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  background: ${(props) => `${props.theme.palette.colors.light.gray}CC`};
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems || "center"};
`;
