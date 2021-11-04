import styled from 'styled-components';

export const ContainerPhoto = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: ${(props) => props.theme.palette.colors.secondaryVariant};
  border: 3px solid ${(props) => props.theme.palette.colors.primary};
  cursor: pointer;

`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Icon = styled.img`
  width: 28px;
  height: 22px;
 `;
