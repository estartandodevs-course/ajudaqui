import { useParams } from "react-router-dom";
import { Layout, OrderCard } from "../../components";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { useStore } from "../../contexts";
import * as S from "./OrderStatusStyled";

export const OrderStatus = () => {
  const [widthScreen] = useWidthScreen();
  const { helpRequests } = useStore();
  const showNavigation = widthScreen < 1200;
  const { helpRequestId } = useParams();

  const getHelpRequests = helpRequests
    ?.find(
      (helpRequest) => helpRequest.id === helpRequestId,
    );
  return (
    <Layout hasTabBar showNavigation={showNavigation} hasClose>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.Title>
            Por favor, aguarde
          </S.Title>
          <OrderCard helpRequest={getHelpRequests} />
          <S.Subtitle>
            Você pode fechar essa tela, avisaremos quando o voluntário chegar.
          </S.Subtitle>
        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside src="/assets/svg/arte idoso desktop.svg" alt="idoso" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
