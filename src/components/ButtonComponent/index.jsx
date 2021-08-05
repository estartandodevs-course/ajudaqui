import * as S from "./ButtonStyled";

export const Button = ({
  width,
  border,
  color,
  shadow,
  background,
  children,
  ...restProps
}) => {
  return (
    <S.Button
      width={width}
      border={border}
      color={color}
      shadow={shadow}
      background={background}
      {...restProps}
    >
      {children}
    </S.Button>
  );
};
