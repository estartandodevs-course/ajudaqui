import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import * as S from './HomeScreenOfTheElderlyStyled';
import {
  UserOverview, Card, Button, Layout, ElderlyModalCard,
} from '../../../components';
import { useWidthScreen } from '../../../utils/hooks/useWidthScreen';
import { useModal, useStore, useAuth } from '../../../contexts';
import { userSchema } from './validationModalCompleteProfile';

export const HomeScreenOfTheElderly = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const [widthScreen] = useWidthScreen();
  const { handleCreateOrder, loadingStore, helpRequests } = useStore();
  const showNavigation = widthScreen < 1200;
  const navigation = useNavigate();

  const { showModal, setIsOpen } = useModal();

  useEffect(() => {
    if (!userSchema.isValidSync(user) || !user.contacts.length < 0) {
      showModal(
        <ElderlyModalCard onClick={() => setIsOpen(false)} />,
        { agree: () => {}, disAgree: () => {} },
      );
    }
  }, []);

  const handleSubmit = async () => {
    await handleCreateOrder({
      order: {
        option: 'EMERGÊNCIA',
        key: 'emergency',
      },
      elderly: {
        id: user.id,
        evaluation: null,
        note: '',
      },
    });
  };

  const activities = helpRequests?.filter((helpRequest) => (
    helpRequest?.elderly?.id === user?.id
  ));

  const grade = activities.filter((activity) => (
    activity?.elderly?.evaluation
  )).reduce((total, activity) => (activity?.elderly.evaluation + total), 0);

  return (
    <Layout
      hasTabBar
      showNavigation={showNavigation}
    >
      <S.ContainerPageAside>
        <S.ContainerPage>
          <S.ContainerUserOverview>
            <UserOverview
              userData={{
                ...user,
                grade: grade ? parseInt((grade / activities.length).toFixed(0), 10) : 0,
              }}
            />
          </S.ContainerUserOverview>
          <S.ContainerOne
            borderTop="1px solid #D8CDEE"
            borderBottom="1px solid #D8CDEE"
          >
            <S.Paragraph>
              Como você prefere pedir ajuda?
            </S.Paragraph>
            <S.ContainerCards>
              <Card
                src="/assets/svg/icon mic.svg"
                color="#fff"
                fontSize="14px"
                disabled
              >
                POR ÁUDIO
              </Card>
              <Card
                src="/assets/svg/icon texto.svg"
                color="#fff"
                fontSize="14px"
                onClick={() => navigation('/ask-for-help')}
              >
                POR TEXTO
              </Card>
            </S.ContainerCards>
          </S.ContainerOne>
          <S.ContainerOne
            borderBottom="1px solid #D8CDEE"
          >
            <S.Paragraph1>
              Informações Pessoais
            </S.Paragraph1>
            <S.ContainerCards>
              <Card
                variant="secondary"
                src="/assets/svg/icon saude.svg"
                color="#fff"
                fontSize="14px"
                onClick={() => navigation('/user-information', {
                  defaultActiveKey: '2',
                })}
              >
                DADOS DE SAÚDE
              </Card>
              <Card
                variant="secondary"
                src="/assets/svg/icon contato.svg"
                color="#fff"
                fontSize="14px"
                onClick={() => navigation('/user-information', {
                  defaultActiveKey: '3',
                })}
              >
                AGENDA DE CONTATOS
              </Card>
            </S.ContainerCards>
          </S.ContainerOne>
          <S.ContainerTwo>
            <S.ContainerTexts>
              <S.TextInformation>
                Possui uma emergência de saúde?
              </S.TextInformation>
            </S.ContainerTexts>
            <S.Paragraph2>
              Clique abaixo e seus familiares e voluntários serão avisados que
              você precisa de socorro
            </S.Paragraph2>
            <S.PositionButton>
              <Button
                background={theme.palette.colors.emergency}
                isLoading={loadingStore}
                onClick={handleSubmit}
              >
                EMERGÊNCIA
              </Button>
            </S.PositionButton>
          </S.ContainerTwo>
        </S.ContainerPage>
        <S.HelpEmergency>
          <S.HelpImage src="/assets/svg/emergencia.svg" />
          <S.TextContainer>
            <S.Text>
              Possui uma emergência de saúde?
            </S.Text>
            <S.Subtitle>
              Clique abaixo e seus familiares e voluntários serão avisados que
              você precisa de socorro
            </S.Subtitle>
          </S.TextContainer>
          <Button
            background={theme.palette.colors.emergency}
            isLoading={loadingStore}
            onClick={handleSubmit}
          >
            EMERGÊNCIA
          </Button>
        </S.HelpEmergency>
      </S.ContainerPageAside>
    </Layout>
  );
};
