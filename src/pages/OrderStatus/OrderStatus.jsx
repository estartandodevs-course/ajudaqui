import { useParams } from "react-router-dom";
import { Layout, OrderCard } from "../../components";
import * as S from "./OrderStatusStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import { useStore } from "../../contexts";

export const OrderStatus = () => {
  const [widthScreen] = useWidthScreen();
  const { helpRequests } = useStore();
  const showNavigation = widthScreen < 1200;
  const { helpRequestId } = useParams();

  const filteredhelpRequest = helpRequests
    .find(
      (helpRequest) => helpRequest.id === helpRequestId,
    );
  return (
    <Layout hasTabBar showNavigation={showNavigation} hasClose>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.Title>
            Por favor, aguarde
          </S.Title>
          <OrderCard helpRequest={filteredhelpRequest} />
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
