import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts';
import { TabBarLinks } from '../../../mocks';
import * as S from './TabBarStyled';

export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);
  const [currentContainer, setCurrentContainer] = useState(0);
  const { pathname } = useLocation();

  const { profileType } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    const activeRoute = TabBarLinks[profileType].find((tabData) => tabData.path === pathname);
    if (activeRoute) {
      setCurrentRoute(activeRoute.dotPosition);
      setCurrentContainer(activeRoute.containerPosition);
    }
  }, [pathname]);

  return (
    <S.Wrapper>
      <S.TabBar>
        <S.Ball $dotPosition={currentRoute} />
        {TabBarLinks[profileType].map((tabBarLink) => (
          <S.IconContent
            key={tabBarLink.key}
            onClick={() => !tabBarLink?.noActive && navigation(tabBarLink.path)}
            $containerPosition={tabBarLink.containerPosition === currentContainer}
          >
            <S.ImageIcon
              src={tabBarLink.icon}
              $containerPosition={tabBarLink.containerPosition === currentContainer}
            />
            <S.DescriptionIcon>{tabBarLink.title}</S.DescriptionIcon>
          </S.IconContent>
        ))}
      </S.TabBar>
    </S.Wrapper>
  );
};
