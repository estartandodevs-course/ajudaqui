import { ElderlyInfosHelp, Layout } from "../../components";
import * as S from "./EmergencyRequestStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const EmergencyRequest = () => {
  const [widthScreen] = useWidthScreen();

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
          <ElderlyInfosHelp name="Francisco" problem="pressão alta" medicines="Indapamida" sonNumber="(084) 91234-5678 (filha)" otherResponsible="(084) 91234-5678 (irmão)" />
        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside src="/assets/svg/arte voluntario.svg" alt="Voluntário" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
