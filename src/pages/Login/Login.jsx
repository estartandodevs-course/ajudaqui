import { Layout, Button, Carousel } from "../../components";
import { FormLogin } from "./forms";
import { onboardingDataDesktop } from "../../_mock";
import { useAuth } from "../../contexts";
import * as S from "./LoginStyled";

export const Login = () => {
  const { profileType } = useAuth();
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
          <S.ForgotPassword to="/">
            Esqueci a senha
          </S.ForgotPassword>
          <S.ButtonContainer>
            <Button type="submit">Entrar</Button>
          </S.ButtonContainer>
          <S.DoRegister to="/register/step-2">
            Não tem cadastro?
          </S.DoRegister>
          <S.GoogleButton width="210px" height="31px" background="#7C7C7C">
            <S.IconButton src="/assets/svg/icon google.svg" alt="google" />
            Entrar com o gmail
          </S.GoogleButton>
        </S.LoginForm>
        <S.LoginAside>
          <Carousel
            enableAutoPlay
            transitionMs={2000}
            showArrows={false}
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
