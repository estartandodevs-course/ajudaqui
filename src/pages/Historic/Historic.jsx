import { useState } from "react";
import { format, parseISO, getDate } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useHistory } from "react-router-dom";
import { Layout, Typography } from "../../components";
import { useAuth, useStore } from "../../contexts";
import { theme } from "../../styles/themes";
import { PROFILES_TYPES } from "../../utils/constants";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import * as S from "./HistoricStyled";
import "react-calendar/dist/Calendar.css";

export const HistoricPage = () => {
  const [valueCalendar, setValueCalendar] = useState(new Date());

  const { push } = useHistory();

  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;

  const { helpRequests } = useStore();

  const { user, profileType } = useAuth();

  const myRequests = profileType === PROFILES_TYPES.ELDERLY ? (
    helpRequests?.filter((helpRequest) => (
      helpRequest.elderly.id === user.id && (
        getDate(new Date(helpRequest.createdAt)) === getDate(new Date(valueCalendar.toISOString()))
      )
    ))
  ) : (
    helpRequests?.filter((helpRequest) => (
      helpRequest.voluntary.id === user.id && (
        getDate(new Date(helpRequest.createdAt)) === getDate(new Date(valueCalendar.toISOString()))
      )
    ))
  );

  const textToCard = profileType === PROFILES_TYPES.ELDERLY ? " Pediu para:" : " Ajudou com:";

  const isEmergency = (data) => data.order.key === "emergency";

  return (
    <Layout
      hasTabBar
      showNavigation={showNavigation}
    >
      <S.HistoricPageContainer>
        <S.HistoricWrapper>
          <Typography
            color={theme.palette.colors.primaryVariant}
            style={{
              alignSelf: "center",
              marginBottom: "16px",
            }}
          >
            Histórico
          </Typography>
          <S.CalendarBox
            onChange={setValueCalendar}
            value={valueCalendar}
            maxDate={new Date()}
            style={{
              width: "auto",
            }}
          />
          <S.RequestsWrapper>
            {
            myRequests.length > 0 ? myRequests.sort((a, b) => {
              if (a.createdAt > b.createdAt) {
                return -1;
              }
              if (a.createdAt < b.createdAt) {
                return 1;
              }
              return 0;
            }).map((request) => (
              <S.CardHistoricData
                $isEmergency={isEmergency(request)}
                key={request.id}
                onClick={() => push(`order-status/${request.id}`)}
              >
                <S.RequestDescription>
                  <Typography variant="body1">{format(parseISO(request.createdAt), "dd/MM", { locale: ptBR })}</Typography>
                  <Typography variant="body1" color="#fff">{`${textToCard} ${request.order.option}`}</Typography>
                </S.RequestDescription>
              </S.CardHistoricData>
            )) : (
              <S.EmptyRequests>
                <Typography variant="body1">
                  Não há pedidos para essa data.
                </Typography>
              </S.EmptyRequests>
            )
          }
          </S.RequestsWrapper>
        </S.HistoricWrapper>
        <S.HistoricAside>
          <S.ImageAside src="/assets/svg/arte voluntario.svg" alt="Voluntário" />
        </S.HistoricAside>
      </S.HistoricPageContainer>
    </Layout>
  );
};
