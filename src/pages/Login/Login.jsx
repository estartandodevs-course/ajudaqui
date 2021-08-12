import { Layout, Carousel } from "../../components";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { loginWithGoogle } from "../../services";
import { FormLogin } from "./forms";
import { onboardingDataDesktop } from "../../_mock";
import { useAuth } from "../../contexts";
import * as S from "./LoginStyled";

export const Login = () => {
  const { push } = useHistory();

  const {
    user: userLogged,
    profileType,
    setAuthIsLoading,
    setUser,
    authIsLoading,
  } = useAuth();

  const handleSubmitGoogle = async () => {
    setAuthIsLoading(true);

    const { user } = await loginWithGoogle(profileType);

    setUser(user);

    setAuthIsLoading(false);
  };

  useEffect(() => {
    if (userLogged.id) {
      push("/");
    }
  }, [userLogged]);
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
          <FormLogin />
          <S.DoRegister to="/register/step-2">
            Não tem cadastro?
          </S.DoRegister>
          <S.GoogleButton
            width="210px"
            height="31px"
            background="#7C7C7C"
            onClick={handleSubmitGoogle}
            disabled={authIsLoading}
          >
            <S.IconButton src="/assets/svg/icon google.svg" alt="google" />
            Entrar com o gmail
          </S.GoogleButton>
        </S.LoginForm>
        <S.LoginAside>
          <Carousel
            autoPlaySpeed={4000}
            transitionMs={2000}
            showArrows={false}
            enableAutoPlay
            infinity
            margin="0"
            height="100vh"
            display="none"
          >
            {onboardingDataDesktop[profileType]?.map(({ id, image, description }) => (

              <S.ContainerOnboarding>
                <S.OnboardingImages
                  key={id}
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
