import { useParams } from "react-router-dom";
import { ElderlyInfosHelp, Layout } from "../../components";
import * as S from "./EmergencyRequestStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { useStore } from "../../contexts";

export const EmergencyRequest = () => {
  const [widthScreen] = useWidthScreen();
  const { elderlys, helpRequests } = useStore();
  const { helpRequestId } = useParams();

  const getHelpRequestData = helpRequests
    .find(
      (helpRequest) => helpRequest.id === helpRequestId,
    );

  const filteredElderly = elderlys.find(
    (elderly) => elderly.id === getHelpRequestData.elderly.id,
  );

  const showNavigation = widthScreen < 1200;
  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.ContainerText>
            <S.Title>
              Pedido de Emergência,
            </S.Title>
            <S.Subtitle>
              Atente às informações importantes:
            </S.Subtitle>
          </S.ContainerText>
          <ElderlyInfosHelp elderlyInfos={filteredElderly} />
        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside src="/assets/svg/arte voluntario.svg" alt="Voluntário" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
