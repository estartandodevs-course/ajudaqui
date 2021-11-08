import { useFormikContext, useField } from 'formik';
import * as S from './TextAreaStyled';

export const TextArea = ({ name, ...restProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleChange = (e) => {
    const { target } = e;
    setFieldValue(name, target?.value || '');
  };

  return (
    <S.TextArea
      as="textarea"
      {...field}
      {...restProps}
      onChange={handleChange}
      name={name}
    />

  );
};
