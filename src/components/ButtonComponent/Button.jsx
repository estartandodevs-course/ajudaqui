import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import * as S from "./ButtonStyled";

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: "#f9f7fd" }} spin />;

export const Button = ({
  width,
  height,
  border,
  color,
  shadow,
  background,
  children,
  isLoading,
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
      {isLoading ? (
        <Spin indicator={antIcon} />
      ) : children}
    </S.Button>
  );
};
