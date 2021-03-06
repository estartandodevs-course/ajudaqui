import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  width: 100%;
  height: 46px;
  padding: 0 20px;
  background-color: #f9f7fb;
  border-radius: 5px;
  box-shadow: 0 0 0 0;
  outline: 0;
  margin-bottom: 12px;
  border: ${(props) => (props.$error
    ? `1px solid ${props.theme.palette.colors.emergency}`
    : `1px solid ${props.theme.palette.colors.border}`)};
  &:disabled {
    background-color: #f1f7fb;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  color: #0c011b;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageError = styled.div`
  color: ${(props) => props.theme.palette.colors.emergency};
  margin-top: -12px;
  font-style: italic;
  font-size: ${(props) => props.theme.typography.body1.fontSizeSubtitles};
  padding: 4px 0;
`;
