import { BackNavigation } from '../../modules';
import { TabBar } from '../../modules/TabBar';
import { ILayoutProps, LayoutDefaultProps } from './interfaces';
import * as S from './LayoutStyled';

export const Layout = ({
  hasTabBar,
  children,
  hasArrow,
  showNavigation,
  hasClose,
}: ILayoutProps) => (
  <S.LayoutWrapper>
    {showNavigation && <BackNavigation hasArrow={hasArrow} hasClose={hasClose} />}
    <S.LayoutMainContent hasTabBar={hasTabBar}>
      {children}
    </S.LayoutMainContent>
    {hasTabBar && <TabBar />}
  </S.LayoutWrapper>
);

Layout.defaultProps = LayoutDefaultProps;
