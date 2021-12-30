import { HTMLAttributes, ReactNode } from 'react';

export interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
  hasTabBar?: boolean,
  children?: ReactNode,
  hasArrow?: boolean,
  showNavigation?: boolean,
  hasClose?: boolean,
}

export const LayoutDefaultProps: ILayoutProps = {
  hasTabBar: false,
  hasArrow: true,
  showNavigation: true,
  hasClose: false,
};
