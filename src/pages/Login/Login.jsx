import { Layout, Button } from "../../components";
import { FormLogin } from "./forms";
import * as S from "./LoginStyled";

export const Login = () => {
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
        <S.LoginAside>::::: ENTRA UM CAROUSEL :::::</S.LoginAside>
      </S.ContainerLogin>
    </Layout>
  );
};
