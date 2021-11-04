import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  Form, Input, Layout, ServiceEvaluation, UserGrade, ThanksCompletedTask, ProfilePhoto,
} from '../../components';
import { serviceEvaluationData } from '../../_mock';
import * as S from './ScreenEvaluationStyled';
import { useWidthScreen } from '../../utils/hooks/useWidthScreen';
import { useAuth, useStore } from '../../contexts';
import { PROFILES_TYPES } from '../../utils/constants';

export const ScreenEvaluation = () => {
  const [evaluation, setEvaluation] = useState(0);

  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;

  const { profileType } = useAuth();

  const {
    helpRequests,
    voluntarys,
    elderlys,
    loadingStore,
    handleEvaluationElderly,
    handleEvaluationVoluntary,
  } = useStore();

  const { helpRequestId } = useParams();

  const navigation = useNavigate();

  const helpRequestData = helpRequests?.find((requestData) => (
    requestData?.id === helpRequestId
  ));

  const voluntaryProfileData = voluntarys?.find((voluntary) => (
    voluntary?.id === helpRequestData?.voluntary?.id
  ));

  const elderlysProfileData = elderlys?.find((elderly) => (
    elderly?.id === helpRequestData?.elderly?.id
  ));

  const handleSubmit = async (values) => {
    if (profileType === PROFILES_TYPES.ELDERLY) {
      await handleEvaluationVoluntary(
        helpRequestId,
        {
          id: voluntaryProfileData?.id,
          ...values,
        },
      );
      return;
    }

    await handleEvaluationElderly(
      helpRequestId,
      {
        id: elderlysProfileData?.id,
        ...values,
      },
      () => {
        if (showNavigation) {
          return navigation('/thanks', { helpRequestId });
        }
        return navigation('/');
      },
    );
  };

  return (
    <>
      {profileType === PROFILES_TYPES.ELDERLY ? (
        <Layout hasTabBar showNavigation={showNavigation}>
          <S.ContainerDesktop>
            <S.ContainerScreenEvaluation>
              <S.ContentTitle>
                <S.TitleHelp>
                  Ajuda encerrada
                </S.TitleHelp>
                <S.DescriptionPersonHelp>
                  Por favor, avalie a pessoa que lhe ajudou
                </S.DescriptionPersonHelp>
                {voluntaryProfileData?.photoURL ? (
                  <S.ImgProfile
                    src={voluntaryProfileData?.photoURL}
                    alt={voluntaryProfileData?.name}
                  />
                ) : (
                  <ProfilePhoto
                    icon="/assets/svg/icon camera.svg"
                    alt="imagem placeholder imagem do usuario"
                  />
                )}
              </S.ContentTitle>
              <S.ContentEvaluation>
                <S.NamePersonHelp>
                  {voluntaryProfileData?.name}
                </S.NamePersonHelp>
                <UserGrade grade={evaluation} />
                <S.ContainerEvaluation>
                  {serviceEvaluationData.map((item) => (
                    <ServiceEvaluation
                      key={item.id}
                      src={item.icon}
                      alt={item.description}
                      $active={item.value === evaluation}
                      click={() => setEvaluation(item.value)}
                    >
                      {item.description}
                    </ServiceEvaluation>
                  )) }
                </S.ContainerEvaluation>
              </S.ContentEvaluation>
              <Form
                initialValues={{
                  note: '',
                  evaluation,
                }}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                <Input type="text" name="note" label="Deixar comentário (opcional)" />
                <S.PositionButton>
                  <Button
                    isLoading={loadingStore}
                    disabled={loadingStore}
                    type="submit"
                  >
                    enviar
                  </Button>
                </S.PositionButton>
              </Form>
            </S.ContainerScreenEvaluation>
            <S.Aside>
              <S.AsideImage src="/assets/svg/arte idoso desktop.svg" />
            </S.Aside>
          </S.ContainerDesktop>
        </Layout>
      ) : (
        <Layout hasTabBar showNavigation={showNavigation}>
          <S.ContainerDesktop>
            <S.ContainerScreenEvaluation>
              <S.ContentTitle>
                <S.TitleHelp>
                  Obrigada por ajudar!
                </S.TitleHelp>
                <S.DescriptionPersonHelp>
                  Gostaria de avaliar a pessoa que você ajudou?
                </S.DescriptionPersonHelp>
                {elderlysProfileData?.photoURL ? (
                  <S.ImgProfile
                    src={elderlysProfileData?.photoURL}
                    alt={elderlysProfileData?.name}
                  />
                ) : (
                  <ProfilePhoto
                    icon="/assets/svg/icon camera.svg"
                    alt="imagem placeholder imagem do usuario"
                  />
                )}
              </S.ContentTitle>
              <S.ContentEvaluation>
                <S.NamePersonHelp>
                  {elderlysProfileData?.name}
                </S.NamePersonHelp>
                <UserGrade grade={evaluation} />
                <S.ContainerEvaluation>
                  {serviceEvaluationData.map((item) => (
                    <ServiceEvaluation
                      key={item.id}
                      src={item.icon}
                      alt={item.description}
                      click={() => setEvaluation(item.value)}
                    >
                      {item.description}
                    </ServiceEvaluation>
                  )) }
                </S.ContainerEvaluation>
              </S.ContentEvaluation>
              <Form
                initialValues={{
                  note: '',
                  evaluation,
                }}
                onSubmit={handleSubmit}
                enableReinitialize
              >
                <Input type="text" name="note" label="Deixar comentário (opcional)" />
                <S.PositionButton>
                  <Button
                    isLoading={loadingStore}
                    disabled={loadingStore}
                    type="submit"
                  >
                    enviar
                  </Button>
                </S.PositionButton>
              </Form>
            </S.ContainerScreenEvaluation>

            <S.ContainerThanksCompletedTask>
              <ThanksCompletedTask helpRequestId={helpRequestId} />
            </S.ContainerThanksCompletedTask>

          </S.ContainerDesktop>
        </Layout>

      )}
    </>

  );
};
