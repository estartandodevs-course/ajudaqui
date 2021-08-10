import { useFormikContext } from "formik";
import * as S from "./TextAreaStyled";

export const TextArea = ({ ...restProps }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    const { target } = e;
    setFieldValue(restProps.name, target?.value || "");
  };

  return (
    <S.TextArea
      as="textarea"
      {...restProps}
      onChange={(e) => handleChange(e)}
    />

  );
};
