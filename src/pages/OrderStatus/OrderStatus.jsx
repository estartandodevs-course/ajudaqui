import { Layout, OrderCard } from "../../components";
import * as S from "./OrderStatusStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const OrderStatus = () => {
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;
  return (
    <Layout hasTabBar showNavigation={showNavigation} hasClose>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.Title>
            Por favor, aguarde
          </S.Title>
          <OrderCard request=" Trocar gás" status=" Aguardando" order=" 02 minutos" action="Pedido Enviado!" warning="Em breve você será atendido(a)" />
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
