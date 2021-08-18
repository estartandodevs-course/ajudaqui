import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TabBarLinks } from "../../_mock";
import * as S from "./TabBarStyled";

export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);
  const [currentContainer, setActiveContainer] = useState(0);

  const { push } = useHistory();

  const handleSelectRoute = (tabBarLink) => {
    setCurrentRoute(tabBarLink.dotPosition);
    setActiveContainer(tabBarLink.containerPosition);
    setTimeout(() => {
      push(tabBarLink.path);
    }, 1000);
  };

  const activeContainer = (index, route) => {
    if (index === route) {
      return true;
    }
    return false;
  };

  return (
    <S.Wrapper>
      <S.TabBar>
        <S.Ball $dotPosition={currentRoute} />
        {TabBarLinks.map((tabBarLink) => (
          <S.IconContent
            key={tabBarLink.key}
            onClick={() => handleSelectRoute(tabBarLink)}
            $containerPosition={activeContainer(
              tabBarLink.containerPosition,
              currentContainer,
            )}
          >
            <S.ImageIcon
              src={tabBarLink.icon}
              $containerPosition={activeContainer(
                tabBarLink.containerPosition,
                currentContainer,
              )}
            />
            <S.DescriptionIcon>{tabBarLink.title}</S.DescriptionIcon>
          </S.IconContent>
        ))}
      </S.TabBar>
    </S.Wrapper>
  );
};
