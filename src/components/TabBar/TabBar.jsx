import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import * as S from "./TabBarStyled";

const TabBarLinks = [
  {
    key: "home",
    route: "/",
    title: "Home",
    icon: "/assets/svg/icon home.svg",
    dotPosition: 1,
    containerPosition: 0,
  },
  {
    key: "help",
    route: "/help",
    title: "Ajuda",
    icon: "/assets/svg/icon ajuda.svg",
    dotPosition: 3,
    containerPosition: 1,
  },
  {
    key: "historic",
    route: "/historic",
    title: "Histórico",
    icon: "/assets/svg/icon historico.svg",
    dotPosition: 5,
    containerPosition: 2,
  },
  {
    key: "profile",
    route: "/profile",
    title: "Perfil",
    icon: "/assets/svg/icon perfil.svg",
    dotPosition: 7,
    containerPosition: 3,
  },
];
export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);
  const [currentContainer, setActiveContainer] = useState(0);

  // const history = useHistory();

  const handleClick = (tabBarLink) => {
    setCurrentRoute(tabBarLink.dotPosition);
    setActiveContainer(tabBarLink.containerPosition);
    // history.push(tabBarLink.route);
  };

  const activeContainer = (index, route) => {
    if (index === route) {
      // console.log(TabBarLinks[route]);
      return true;
    }
    return false;
  };

  return (
    <S.Wrapper>
      <S.TabBar>
        {/* {TabBarLinks.map((tabBarLink) => (
        <S.Ball
          $isActive={tabBarLink.key === currentRoute}
          key={tabBarLink.key}
        />
      ))} */}
        <S.Ball
          $dotPosition={currentRoute}
        />
        {TabBarLinks.map((tabBarLink) => (
          <S.IconContent
            key={tabBarLink.key}
            onClick={() => handleClick(tabBarLink)}
            $containerPosition={activeContainer(tabBarLink.containerPosition, currentContainer)}
          >
            <S.ImageIcon
              src={tabBarLink.icon}
              $containerPosition={activeContainer(tabBarLink.containerPosition, currentContainer)}
            />
            <S.DescriptionIcon>{tabBarLink.title}</S.DescriptionIcon>
          </S.IconContent>
        ))}
      </S.TabBar>
    </S.Wrapper>
  );
};
