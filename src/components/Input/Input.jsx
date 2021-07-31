import React from "react";
import * as S from "./InputStyles";


export const Input = (props) => {
  const { label } = props;
  return (
    <div>
      <S.Label>{label}</S.Label>
      <S.Input type="text" />
    </div>

  );
};
