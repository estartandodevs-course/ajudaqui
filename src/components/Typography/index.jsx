import React from "react";
import PropTypes from "prop-types";
import { Typographies } from "./TypographyStyled";

Typography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
};

const Typography = (
  {
    children,
    variant,
    color,
    weight,
  },
  ) => {
    
    const Element = Typographies[variant];
    
    return (
      <Element color={color} weight={weight}>
      {children}
    </Element>
  );
};


Typography.defaultProps = {
  variant: "body1",
}

export { Typography };
