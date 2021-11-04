import { BackNavigation } from '../BackNavigation';
import { TabBar } from '../TabBar';
import * as S from './LayoutStyled';

export const Layout = ({
  hasTabBar = false, children, hasArrow = true, showNavigation = true, hasClose = false,
}) => (
  <S.LayoutWrapper>
    {showNavigation && <BackNavigation hasArrow={hasArrow} hasClose={hasClose} />}
    <S.LayoutMainContent $hasTabBar={hasTabBar}>
      { children }
    </S.LayoutMainContent>
    {hasTabBar && <TabBar />}
  </S.LayoutWrapper>
);
