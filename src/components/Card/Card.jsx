import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardStyled";

export const Card = ({
  children,
  width,
  height,
  flexDirection,
  background,
  showIcon,
  day,
  shadow,
  ...restProps
}) => {
  return (
    <S.ContainerCard
      width={width}
      height={height}
      flexDirection={flexDirection}
      background={background}
      shadow={shadow}
      {...restProps}
    >
      {showIcon ? (
        <S.IconCard {...restProps} />
      ) : (
        <S.DaysCard>{day}</S.DaysCard>
      )}
      <S.DescriptionCard>{children}</S.DescriptionCard>
    </S.ContainerCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  flexDirection: PropTypes.string,
  background: PropTypes.string,
  showIcon: PropTypes.bool,
  day: PropTypes.string,
  shadow: PropTypes.bool || PropTypes.string,
  border: PropTypes.string,
};

Card.defaultProps = {
  width: "140px",
  height: "80px",
  flexDirection: "column",
  showIcon: false,
  day: "25/08",
  shadow: true,
};
