import React from "react";
import * as S from "./TypographyStyled";

export const Typography = ({
  children,
  font,
  fontSize,
  fontWeight,
  fontColor,
  type = "h1",
}) => {
  return (
    <S.Typography
      as={type}
      font={font}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontColor={fontColor}
    >
      {children}
    </S.Typography>
  );
};
