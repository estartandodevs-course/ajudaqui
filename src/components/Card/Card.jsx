import React from "react";
import PropTypes from "prop-types";
import * as S from "./CardStyled";

export const Card = ({
  children,
  variant = "default",
  day,
  color,
  fontSize,
  ...restProps
}) => {
  return (
    <S.ContainerCard
      variant={variant}
      {...restProps}
    >
      <S.IconCard {...restProps} />
      {day && <S.DaysCard>{day}</S.DaysCard>}
      <S.DescriptionCard
        fontSize={fontSize}
        color={color}
      >
        {children}
      </S.DescriptionCard>
    </S.ContainerCard>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  day: PropTypes.string,
  fontSize: PropTypes.string,
};

Card.defaultProps = {
  day: "",
};
