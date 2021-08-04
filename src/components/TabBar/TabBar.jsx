import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import * as S from "./TabBarStyled";

const TabBarLinks = [
  {
    key: "home",
    route: "/",
    title: "Home",
    icon: "/assets/svg/icon home.svg",
  },
  {
    key: "help",
    route: "/help",
    title: "Ajuda",
    icon: "/assets/svg/icon ajuda.svg",
  },
  {
    key: "historic",
    route: "/historic",
    title: "Histórico",
    icon: "/assets/svg/icon historico.svg",
  },
  {
    key: "profile",
    route: "/profile",
    title: "Perfil",
    icon: "/assets/svg/icon perfil.svg",
  },
];
export const TabBar = () => {
  const [currentRoute, setCurrentRoute] = useState("");

  // const history = useHistory();

  const handleClick = (tabBarLink) => {
    setCurrentRoute(tabBarLink.key);
    // history.push(tabBarLink.route);
  };

  return (
    <S.TabBar>
      {TabBarLinks.map((tabBarLink) => (
        <S.Ball
          $isActive={tabBarLink.key === currentRoute}
          key={tabBarLink.key}
        />
      ))}

      {TabBarLinks.map((tabBarLink) => (
        <S.IconContent key={tabBarLink.key} onClick={() => handleClick(tabBarLink)}>
          <S.ImageIcon src={tabBarLink.icon} />
          <S.DescriptionIcon>{tabBarLink.title}</S.DescriptionIcon>
        </S.IconContent>
      ))}
    </S.TabBar>
  );
};
