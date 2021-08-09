import { Field } from "formik";
import styled from "styled-components";

export const TextArea = styled(Field)`
  padding: 10px 8px;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  border: ${(props) => `1px solid ${props.theme.palette.colors.border}`};
  background: ${(props) => props.theme.palette.colors.light.grayish};

  ::placeholder {
    color: ${(props) => props.theme.palette.colors.light.gray};
  }
  :focus {
    outline: none;
  }
`;
