import styled from "styled-components";

export const InputCheck = styled.input`
  display: none;

  &:checked ~ label > div > div {
    border: 2px solid;
    border-image: ${(props) => props.theme.palette.colors.gradientBackground};
  }
`;
export const TesteInputCheck = styled.input`
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
