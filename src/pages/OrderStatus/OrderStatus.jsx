import { useParams } from "react-router-dom";
import { Layout, OrderCard } from "../../components";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { useAuth, useStore } from "../../contexts";
import * as S from "./OrderStatusStyled";
import { orderStatusId, PROFILES_TYPES } from "../../utils/constants";

export const OrderStatus = () => {
  const [widthScreen] = useWidthScreen();
  const { helpRequests } = useStore();
  const showNavigation = widthScreen < 1200;
  const { helpRequestId } = useParams();
  const { profileType } = useAuth();

  const getHelpRequests = helpRequests?.find(
    (helpRequest) => helpRequest.id === helpRequestId,
  );

  return (
    <Layout hasTabBar showNavigation={showNavigation} hasClose>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.Title>
            {profileType === PROFILES_TYPES.ELDERLY
              && getHelpRequests.status !== orderStatusId.CANCELED
              && "Por favor, aguarde."}
          </S.Title>
          <OrderCard helpRequest={getHelpRequests} />
          <S.Subtitle>
            {profileType === PROFILES_TYPES.ELDERLY
              && "Você pode fechar essa tela, avisaremos quando o voluntário chegar."}
          </S.Subtitle>
        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside src="/assets/svg/arte idoso desktop.svg" alt="idoso" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
