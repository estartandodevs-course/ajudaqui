import { ReactNode, HTMLAttributes } from 'react';

export interface ITypography extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode | ReactNode[];
  variant?: 'h1' | 'h2' | 'body1'
}

export const TypographyDefaultProps: ITypography = {
  variant: 'body1',
};
