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
  },
  {
    key: "help",
    route: "/help",
    title: "Ajuda",
    icon: "/assets/svg/icon ajuda.svg",
    dotPosition: 3,
  },
  {
    key: "historic",
    route: "/historic",
    title: "Histórico",
    icon: "/assets/svg/icon historico.svg",
    dotPosition: 5,
  },
  {
    key: "profile",
    route: "/profile",
    title: "Perfil",
    icon: "/assets/svg/icon perfil.svg",
    dotPosition: 7,
  },
];
export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState(1);

  // const history = useHistory();

  const handleClick = (tabBarLink) => {
    setCurrentRoute(tabBarLink.dotPosition);
    // history.push(tabBarLink.route);
  };

  return (
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
        <S.IconContent key={tabBarLink.key} onClick={() => handleClick(tabBarLink)}>
          <S.ImageIcon src={tabBarLink.icon} />
          <S.DescriptionIcon>{tabBarLink.title}</S.DescriptionIcon>
        </S.IconContent>
      ))}
    </S.TabBar>
  );
};
