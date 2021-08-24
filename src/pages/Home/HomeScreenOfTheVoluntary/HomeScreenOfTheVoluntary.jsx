import React from "react";
import { useAuth, useStore } from "../../../contexts";
import { Layout, HelpRequestCard } from "../../../components";
import * as S from "./HomeScreenOfTheVoluntaryStyled";

export const HomeScreenOfTheVoluntary = () => {
  const { user } = useAuth();
  const { helpRequests } = useStore();
  const getOpenHelpRequests = helpRequests
    .filter((opened) => (
      opened.voluntary.id === user.id
    || !opened.voluntary.id
    ))
    .sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });

  return (
    <Layout
      hasTabBar
    >
      <S.ContainerTitles>
        <S.Title>
          {`Olá, ${user.name}`}
        </S.Title>
        <S.Subtitle>
          vamos ajudar um idoso?
        </S.Subtitle>
      </S.ContainerTitles>
      <S.HelpAvailable>
        <S.LocationIcon
          src="/assets/svg/icon localização.svg"
          alt="Icone de Localização"
        />
        <S.LocationText>
          {`${getOpenHelpRequests.length} idosos próximos a você precisam de ajuda`}
        </S.LocationText>
      </S.HelpAvailable>
      <S.ContainerHelpCard>
        {getOpenHelpRequests.map((help) => {
          return (
            <HelpRequestCard
              key={help.id}
              helpRequestData={help}
              isVoluntary={help?.voluntary?.id === user?.id}
            />
          );
        })}
      </S.ContainerHelpCard>
    </Layout>
  );
};
