import styled, { css } from 'styled-components';

interface IProfileLabel {
  selectedType: boolean
}

const isSelected = css`
  border: 2px solid;
  border-image: ${(props) => (`${props.theme.palette.colors.gradientBackground} 1`)};
`;

export const ProfileTypeWrapper = styled.div`
  display: flex;
  gap: 32px;
  @media (min-width: 720px) {
    gap: 53px;
  }
`;

export const ProfileLabel = styled.label<IProfileLabel>`
  ${(props) => props.selectedType && isSelected}
`;
