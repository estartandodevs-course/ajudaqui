import * as S from "./ButtonStyled";

export const Button = ({
  width,
  height,
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
      height={height}
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
