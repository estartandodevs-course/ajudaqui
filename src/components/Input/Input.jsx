import React from "react";
import * as S from "./InputStyles";

export const Input = ({ label, type, ...restProps }) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input type={type} {...restProps} />
    </>

  );
};
