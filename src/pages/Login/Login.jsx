import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout } from "../../components";
import { useAuth } from "../../contexts";
import { loginWithGoogle } from "../../services";
import { FormLogin } from "./forms";
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
        <S.LoginAside>::::: ENTRA UM CAROUSEL :::::</S.LoginAside>
      </S.ContainerLogin>
    </Layout>
  );
};
