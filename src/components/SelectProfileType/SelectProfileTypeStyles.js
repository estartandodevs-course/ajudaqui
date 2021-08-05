import styled, { css } from "styled-components";

const isSelected = css`
  border: 2px solid;
  border-image: ${(props) => (`${props.theme.palette.colors.gradientBackground} 1`)};
`;

export const ProfileTypeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProfileLabel = styled.label`
  ${(props) => props.selectedType && isSelected}
`;
