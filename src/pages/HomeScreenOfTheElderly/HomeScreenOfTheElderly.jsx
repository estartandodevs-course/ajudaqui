import React from "react";
import * as S from "./HomeScreenOfTheElderlyStyled";
import {
  UserOverview, Card, Button, Layout,
} from "../../components";
import { userData } from "../../_mock/userData";


export const HomeScreenOfTheElderly = () => {
  return (
    <Layout hasTabBar>

      <S.ContainerPage>

        <S.ContainerUserOverview>
          <UserOverview userData={userData} />
        </S.ContainerUserOverview>

        <S.ContainerOne borderTop="1px solid #D8CDEE" borderBottom="1px solid #D8CDEE">

          <S.Paragraph>Como você prefere pedir ajuda?</S.Paragraph>
          <S.ContainerCards>
            <Card
              src="/assets/svg/icon texto.svg"
              color="white"
            >
              {" "}
              POR TEXTO
              {" "}
            </Card>
            <Card
              src="/assets/svg/icon mic.svg"
              color="white"
            >
              {" "}
              POR ÁUDIO
              {" "}
            </Card>
          </S.ContainerCards>

        </S.ContainerOne>

        <S.ContainerOne borderBottom="1px solid #D8CDEE">
          <S.Paragraph1>Informações Pessoais</S.Paragraph1>
          <S.ContainerCards>
            <Card
              variant="secondary"
              src="/assets/svg/icon saude.svg"
              color="white"
              textAlign="center"
            >
              {" "}
              DADOS DE SAÚDE
              {" "}
            </Card>

            <Card
              variant="secondary"
              src="/assets/svg/icon contato.svg"
              color="white"
              textAlign="center"
            >
              {" "}
              AGENDA DE CONTATOS
              {" "}
            </Card>
          </S.ContainerCards>

        </S.ContainerOne>

        <S.ContainerTwo>
          <S.ContainerTexts>
            <S.Paragraph>Possui uma emergência de saúde?</S.Paragraph>
          </S.ContainerTexts>
          <S.Paragraph1>
            Clique abaixo e seus familiares e voluntários
            serão avisados que você precisa de socorro

          </S.Paragraph1>
          <S.PositionButton>
            <Button
              background="#BC1610"
            >
              EMERGÊNCIA
            </Button>
          </S.PositionButton>
        </S.ContainerTwo>
      </S.ContainerPage>
    </Layout>
  );
};
