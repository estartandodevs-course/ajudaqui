import React from "react";
import PropTypes from "prop-types";
import { Typographies } from "./TypographyStyled";

const Typography = (
  {
    children,
    variant,
    color,
    ...restProps
  },
) => {
  const Element = Typographies[variant];

  return (
    <Element color={color} {...restProps}>
      {children}
    </Element>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
};

Typography.defaultProps = {
  variant: "h1",

};

export { Typography };
