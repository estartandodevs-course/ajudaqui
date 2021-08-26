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

  const hasConcluded = getHelpRequests?.status === orderStatusId.CONCLUDED;
  const isCanceled = getHelpRequests?.status !== orderStatusId.CANCELED;

  return (
    <Layout hasTabBar showNavigation={showNavigation} hasClose>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.Title>
            {profileType === PROFILES_TYPES.ELDERLY
              && isCanceled
              && !hasConcluded
              && "Por favor, aguarde."}
          </S.Title>
          <OrderCard helpRequest={getHelpRequests} />
          <S.Subtitle>
            {profileType === PROFILES_TYPES.ELDERLY
              && isCanceled
              && !hasConcluded
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
