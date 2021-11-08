import { ReactNode } from 'react';
import { BackNavigation } from '../../modules/BackNavigation';
import { TabBar } from '../../modules/TabBar';
import * as S from './LayoutStyled';

interface ILayout {
  hasTabBar?: boolean,
  children?: ReactNode,
  hasArrow?: boolean,
  showNavigation?: boolean,
  hasClose?: boolean,
}

const LayoutDefaultProps: ILayout = {
  hasTabBar: false,
  hasArrow: true,
  showNavigation: true,
  hasClose: false,
};

export const Layout = ({
  hasTabBar = false,
  children, hasArrow = true,
  showNavigation = true,
  hasClose = false,
}: ILayout) => (
  <S.LayoutWrapper>
    {showNavigation && <BackNavigation hasArrow={hasArrow} hasClose={hasClose} />}
    <S.LayoutMainContent hasTabBar={hasTabBar}>
      { children }
    </S.LayoutMainContent>
    {hasTabBar && <TabBar />}
  </S.LayoutWrapper>
);

Layout.defaultProps = LayoutDefaultProps;
