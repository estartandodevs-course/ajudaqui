import * as S from "./ButtonStyled";

export const Button = ({ width, border, color, shadow, background, children }) => {
  const Click = () => {
  };
  return (
    <div>
      <S.Button type="button" width={width} border={border} color={color} shadow={shadow} background={background} onClick={Click}>{children}</S.Button>
    </div>
  );
};
