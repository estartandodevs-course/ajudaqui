import React from "react";
import * as S from "./HomeScreenOfTheElderlyStyled";
import {
  UserOverview, Card, Button, Layout,
} from "../../../components";
import { useAuth } from "../../../contexts/Auth/hooks";

export const HomeScreenOfTheElderly = () => {
  const { user } = useAuth();
  return (
    <Layout hasTabBar>
      <S.ContainerPage>
        <S.ContainerUserOverview>
          <UserOverview userData={user} />
        </S.ContainerUserOverview>
        <S.ContainerOne
          borderTop="1px solid #D8CDEE"
          borderBottom="1px solid #D8CDEE"
        >
          <S.Paragraph>Como você prefere pedir ajuda?</S.Paragraph>
          <S.ContainerCards>
            <Card
              src="/assets/svg/icon texto.svg"
              color="#fff"
              fontSize="14px"
            >
              POR TEXTO
            </Card>
            <Card
              src="/assets/svg/icon mic.svg"
              color="#fff"
              fontSize="14px"
            >
              POR ÁUDIO
            </Card>
          </S.ContainerCards>
        </S.ContainerOne>
        <S.ContainerOne borderBottom="1px solid #D8CDEE">
          <S.Paragraph1>Informações Pessoais</S.Paragraph1>
          <S.ContainerCards>
            <Card
              variant="secondary"
              src="/assets/svg/icon saude.svg"
              color="#fff"
              fontSize="14px"
            >
              DADOS DE SAÚDE
            </Card>
            <Card
              variant="secondary"
              src="/assets/svg/icon contato.svg"
              color="#fff"
              fontSize="14px"
            >
              AGENDA DE CONTATOS
            </Card>
          </S.ContainerCards>
        </S.ContainerOne>
        <S.ContainerTwo>
          <S.ContainerTexts>
            <S.TextInformation>Possui uma emergência de saúde?</S.TextInformation>
          </S.ContainerTexts>
          <S.Paragraph1>
            Clique abaixo e seus familiares e voluntários serão avisados que
            você precisa de socorro
          </S.Paragraph1>
          <S.PositionButton>
            <Button
              background={(props) => props.theme.palette.colors.emergency}
            >
              EMERGÊNCIA
            </Button>
          </S.PositionButton>
        </S.ContainerTwo>
      </S.ContainerPage>
    </Layout>
  );
};
