import { useHistory } from "react-router-dom";
import { Layout, Button } from "../../components";
import { FormLogin } from "./forms";
import * as S from "./style";

export const Login = () => {
  const { goBack } = useHistory();
  return (
    <>
      <Layout>
        <S.ContainerLogin>
          <S.ContentBack>
            <S.Back src="/assets/svg/back.svg" alt="back" onClick={() => goBack()} />
          </S.ContentBack>
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
          <S.DoRegister to="/register">
            Não tem cadastro?
          </S.DoRegister>
          <Button width="210px" height="31px" background="#7C7C7C">
            <S.IconButton src="/assets/svg/icon google.svg" alt="google" />
            Entrar com o gmail
          </Button>
        </S.ContainerLogin>
      </Layout>
    </>
  );
};
