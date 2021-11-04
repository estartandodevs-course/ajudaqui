import { useAuth, useStore } from '../../../contexts';
import { Layout, HelpRequestCard } from '../../../components';
import * as S from './HomeScreenOfTheVoluntaryStyled';
import { useWidthScreen } from '../../../utils/hooks/useWidthScreen';
import { orderStatusId } from '../../../utils/constants';

export const HomeScreenOfTheVoluntary = () => {
  const [widthScreen] = useWidthScreen();
  const showNavigation = widthScreen < 1200;
  const { user } = useAuth();
  const { helpRequests } = useStore();
  const getOpenHelpRequests = helpRequests
    .filter((opened) => (
      (opened.voluntary.id === user.id || !opened.voluntary.id)
       && opened.status !== orderStatusId.CONCLUDED
       && opened.status !== orderStatusId.CANCELED
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

  const elderlysNeedHelp = [];

  getOpenHelpRequests?.forEach((item) => {
    if (!elderlysNeedHelp.includes(item?.elderly?.id)) {
      elderlysNeedHelp.navigation(item?.elderly?.id);
    }
  });

  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.PagesContainer>
        <S.ContainerPage>
          <S.ContainerTitles>
            <S.Title>{`Olá ${user.name},`}</S.Title>
            <S.Subtitle>vamos ajudar um idoso?</S.Subtitle>
          </S.ContainerTitles>
          <S.HelpAvailable>
            <S.LocationIcon
              src="/assets/svg/icon localização.svg"
              alt="Icone de Localização"
            />
            <S.LocationText>
              {`${elderlysNeedHelp.length} idosos próximos a você precisam de ajuda`}
            </S.LocationText>
          </S.HelpAvailable>
          <S.ContainerHelpCard>
            {getOpenHelpRequests.map((help) => (
              <HelpRequestCard
                key={help.id}
                helpRequestData={help}
                isVoluntary={help?.voluntary?.id === user?.id}
              />
            ))}
          </S.ContainerHelpCard>
        </S.ContainerPage>

        <S.ContainerPageTwo>
          <div>
            <S.Image src="/assets/svg/arte voluntario.svg" alt="" />
          </div>
        </S.ContainerPageTwo>
      </S.PagesContainer>
    </Layout>
  );
};
