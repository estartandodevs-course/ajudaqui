import styled from "styled-components";
import { Field } from "formik";

export const Input = styled(Field)`
  width: 100%;
  height: 54px;
  padding: 0 20px;
  background-color: #f9f7fb;
  border: black solid 1px;
  border-radius: 5px;
  box-shadow: 0 0 0 0;
  outline: 0;
`;
export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 19px;
  color: #0c011b;
`;
