import { ITypography, TypographyDefaultProps } from './interfaces';
import { Typographies } from './TypographyStyled';

const Typography = (
  {
    children,
    variant,
  }: ITypography,
) => {
  const Element = Typographies[variant];

  return (
    <Element>
      {children}
    </Element>
  );
};

Typography.defaultProps = TypographyDefaultProps;

export { Typography };
