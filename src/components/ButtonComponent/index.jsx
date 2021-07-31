import * as S from "./ButtonStyled";

export const Button = ({ width, border, color, shadow, background, children }) => {
  return (
    <div>
      <S.Button type="button" width={width} border={border} color={color} shadow={shadow} background={background}>{children}</S.Button>
    </div>
  );
};
