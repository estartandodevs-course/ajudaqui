import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Carousel } from "../../components";
import { FormLogin } from "./forms";
import { onboardingDataDesktop } from "../../_mock";
import { useAuth } from "../../contexts";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";
import * as S from "./LoginStyled";

export const Login = () => {
  const { push } = useHistory();
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen <= 1200;

  const {
    user,
    profileType,
    authIsLoading,
    loginGoogle,
  } = useAuth();


  useEffect(() => {
    if (user.id) {
      push("/");
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
          <S.DoRegister to="/register">
            Não tem cadastro?
          </S.DoRegister>
          <S.GoogleButton
            width="210px"
            height="31px"
            background="#7C7C7C"
            onClick={() => loginGoogle(profileType)}
            disabled={authIsLoading}
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
