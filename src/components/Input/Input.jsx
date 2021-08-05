import React from "react";
import { useField, useFormikContext } from "formik";
import * as S from "./InputStyles";

export const Input = ({
  label, ...props
}) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <>
      <S.Label htmlFor={props.id || props.name}>{label}</S.Label>
      <S.Input
        {...field}
        {...props}
        onChange={(e) => {
          setFieldValue(props.name, e.target.value);
        }}
      />
      {meta.touched && meta.error ? (
        <div>{meta.error}</div>
      ) : null}
    </>

  );
};
