import styled from "styled-components";

export const InputCheck = styled.input`
  display: none;
  &:checked ~ label > div {
    border: aliceblue 1px solid;
  }
`;
