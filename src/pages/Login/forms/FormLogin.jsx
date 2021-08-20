import { useState } from "react";
import { Input, Form, Button } from "../../../components";
import { validationLogin } from "../validation";
import { useAuth } from "../../../contexts";
import * as S from "../LoginStyled";

export const FormLogin = () => {
  const [isEmail, setIsEmail] = useState(false);

  const onChangeEmailPhone = (e) => {
    const email = e.target.value.includes("@");
    if (email) {
      setIsEmail(true);
    } else setIsEmail(false);
  };

  const {
    profileType,
    loadingAuth,
    loginEmail,
  } = useAuth();

  return (
    <Form
      initialValues={{
        emailOrPhone: "",
        password: "",
      }}
      validationSchema={validationLogin}
      onSubmit={async ({ emailOrPhone, password }) => {
        await loginEmail({ email: emailOrPhone, password }, profileType);
      }}
    >
      <Input
        type="text"
        name="emailOrPhone"
        label="E-mail ou número do celular"
        onChange={onChangeEmailPhone}
        disabled={loadingAuth}
      />
      <Input type="password" name="password" label="Senha" disabled={loadingAuth} />
      <Input type="hidden" name="isEmailValue" value={isEmail} />
      <S.ContainerForgot>
        <S.ForgotPassword to="/register-new-password">Esqueci a senha</S.ForgotPassword>
      </S.ContainerForgot>
      <S.ButtonContainer>
        <Button type="submit" width="106px" disabled={loadingAuth} isLoading={loadingAuth}>Entrar</Button>
      </S.ButtonContainer>
    </Form>
  );
};
