import { HelpRequestCard, Layout } from "../../components";
import { elderlyInfos } from "../../_mock";
import * as S from "./VolunteerHomeStyled";

export const VolunteerHome = () => {
  return (
    <Layout hasTabBar>
      <S.ContainerTitles>
        <S.Title>
          Olá, Pedro,
        </S.Title>
        <S.Subtitle>
          vamos ajudar um idoso?
        </S.Subtitle>
      </S.ContainerTitles>
      <S.HelpAvailable>
        <S.LocationIcon src="/assets/svg/icon localização.svg" alt="Icone de Localização" />
        <S.LocationText>
          8 idosos próximos a você precisam de ajuda
        </S.LocationText>
      </S.HelpAvailable>
      <S.ContainerHelpCard>
        {elderlyInfos.map((item) => {
          return (
            <HelpRequestCard
              key={item.id}
              name={item.name}
              task={item.task}
              distance={item.distance}
              orderTime={item.orderTime}
              photo={item.photo}
              action={item.action}
              variant={item.variant}
              color={item.color}
              colorTask={item.colorTask}
            />

          );
        })}
      </S.ContainerHelpCard>
    </Layout>
  );
};
