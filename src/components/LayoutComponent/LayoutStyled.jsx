import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ImageTop = styled.img`
  position: sticky;
  top: 0;
  width: 100%;
  @media(min-width: 1200px) {
    display: none;
  }
`;

export const LayoutMainContent = styled.main`
  flex: 1;
  overflow: scroll;
`;
