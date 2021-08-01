import React from "react";
import PropTypes from "prop-types";
import { Typographies } from "./TypographyStyled";

const Typography = (
  {
    children,
    variant,
    color,
    weight,
  },
) => {
  Typography.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
  };

  const Element = Typographies[variant];

  return (
    <Element color={color} weight={weight}>
      {children}
    </Element>
  );
};

export { Typography };
