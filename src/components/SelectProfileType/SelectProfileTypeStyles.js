import styled, { css } from "styled-components";

const isSelected = css`
  border: 2px solid;
  border-image: ${(props) => (`${props.theme.palette.colors.gradientBackground} 1`)};
`;

export const ProfileTypeWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

export const ProfileLabel = styled.label`
  ${(props) => props.selectedType && isSelected}
`;
