import React from "react";
import * as S from "./InputStyles";


export const Input = (props) => {
  const { label, type } = props;

  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input type={type} />
    </>

  );
};
