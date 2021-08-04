import styled from "styled-components";

export const ElderlyInputCheck = styled.input`
  display: none;

  &:checked ~ label > div > div {
    border: 2px solid;
    border-image: ${(props) => props.theme.palette.colors.gradientBackground};
  }
`;
export const VoluntayInputCheck = styled.input`
  display: none;
  &:checked ~ label > div {
    border: 2px solid;
    border-image: ${(props) => props.theme.palette.colors.gradientBackground};
  }
`;
export const ContainerInput = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
`;
