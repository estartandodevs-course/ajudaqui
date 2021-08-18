import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { TabBarLinks } from "../../_mock";
import * as S from "./TabBarStyled";

export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);
  const [currentContainer, setCurrentContainer] = useState(0);
  const { pathname } = useLocation();

  const { push } = useHistory();

  useEffect(() => {
    const activeRoute = TabBarLinks.find((tabData) => tabData.path === pathname);
    if (activeRoute) {
      setCurrentRoute(activeRoute.dotPosition);
      setCurrentContainer(activeRoute.containerPosition);
    }
  }, [pathname]);

  return (
    <S.Wrapper>
      <S.TabBar>
        <S.Ball $dotPosition={currentRoute} />
        {TabBarLinks.map((tabBarLink) => (
          <S.IconContent
            key={tabBarLink.key}
            onClick={() => push(tabBarLink.path)}
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
