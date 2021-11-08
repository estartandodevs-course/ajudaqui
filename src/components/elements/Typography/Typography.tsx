import { Typographies } from './TypographyStyled';

interface ITypography {
  children?: string;
  variant?: 'h1' | 'h2' | 'body1';
  color?: string;
  style?: {},
  onClick?: () => void
}

const TypographyDefaultProps: ITypography = {
  variant: 'body1',
};

const Typography = (
  {
    children,
    variant,
    color,
    ...restProps
  }: ITypography,
) => {
  const Element = Typographies[variant];

  return (
    <Element color={color} {...restProps}>
      {children}
    </Element>
  );
};

Typography.defaultProps = TypographyDefaultProps;

export { Typography };
