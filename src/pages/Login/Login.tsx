import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Carousel } from '../../components';
import { onboardingDataDesktop } from '../../mocks';
import { useAuth } from '../../contexts';
import * as S from './LoginStyled';

export const Login = () => {
  const navigation = useNavigate();

  const {
    user,
    profileType,
    loadingAuth,
    loginGoogle,
  } = useAuth();

  useEffect(() => {
    if (user?.id) {
      navigation('/');
    }
  }, [user]);
  return (
    <Layout>
      <S.ContainerLogin>
        <S.LoginForm>
          <S.Logo src="/assets/svg/logo.svg" alt="logo ajudaqui" />
          <S.ContentTitle>
            <S.LoginTitle>
              Que bom ver você aqui!
            </S.LoginTitle>
            <S.LoginDescription>
              Faça login e você estará pronto para ajudar
            </S.LoginDescription>
          </S.ContentTitle>
          <S.ContainerRegister>
            <S.DoRegister to="/register">
              Não tem cadastro?
            </S.DoRegister>
          </S.ContainerRegister>
          <S.GoogleButton
            onClick={() => loginGoogle(profileType)}
            disabled={loadingAuth}
          >
            <S.IconButton src="/assets/svg/icon google.svg" alt="google" />
            Entrar com o gmail
          </S.GoogleButton>
        </S.LoginForm>
        <S.LoginAside>
          <Carousel
            autoPlaySpeed={5000}
            transitionMs={100}
            showArrows={false}
            enableAutoPlay
            infinity
          >
            {onboardingDataDesktop[profileType]?.map(({ id, image, description }) => (
              <S.ContainerOnboarding key={id}>
                <S.OnboardingImages
                  src={image}
                  alt="onboarding"
                />
                <S.TitleOnboarding>
                  {description}
                </S.TitleOnboarding>
              </S.ContainerOnboarding>
            ))}
          </Carousel>
        </S.LoginAside>
      </S.ContainerLogin>
    </Layout>
  );
};
