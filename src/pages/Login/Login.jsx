import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Carousel } from '../../components';
import { FormLogin } from './forms';
import { onboardingDataDesktop } from '../../_mock';
import { useAuth } from '../../contexts';
import { useWidthScreen } from '../../utils/hooks/useWidthScreen';
import * as S from './LoginStyled';

export const Login = () => {
  const navigation = useNavigate();
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;

  const {
    user,
    profileType,
    loadingAuth,
    loginGoogle,
  } = useAuth();

  useEffect(() => {
    if (user.id) {
      navigation('/');
    }
  }, [user]);
  return (
    <Layout showNavigation={showNavigation}>
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
          <FormLogin />
          <S.ContainerRegister>

            <S.DoRegister to="/register">
              Não tem cadastro?
            </S.DoRegister>
          </S.ContainerRegister>
          <S.GoogleButton
            width="210px"
            background="#7C7C7C"
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
            margin="0"
            height="100vh"
            display="none"
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
