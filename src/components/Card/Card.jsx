import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardStyled";

export const Card = ({
  children,
  width,
  height,
  variant = "default",
  flexDirection,
  background,
  day,
  textAlign,
  ...restProps
}) => {
  return (
    <S.ContainerCard
      width={width}
      height={height}
      flexDirection={flexDirection}
      variant={variant}
      {...restProps}
    >
      <S.IconCard {...restProps} />
      {day && <S.DaysCard>{day}</S.DaysCard>}
      <S.DescriptionCard textAlign={textAlign}>
        {children}
      </S.DescriptionCard>
    </S.ContainerCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  flexDirection: PropTypes.string,
  day: PropTypes.string,
  border: PropTypes.string,
  textAlign: PropTypes.string,
};

Card.defaultProps = {
  width: "140px",
  height: "80px",
  flexDirection: "column",
  day: "",
};
