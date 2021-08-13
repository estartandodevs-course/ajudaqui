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
    authIsLoading,
    loginEmail,
  } = useAuth();

  return (
    <Form
      initialValues={{
        emailOrPhone: "",
        password: "",
      }}
      validationSchema={validationLogin}
      onSubmit={({ emailOrPhone, password }) => (
        loginEmail({ email: emailOrPhone, password }, profileType))}
    >
      <Input
        type="text"
        name="emailOrPhone"
        label="E-mail ou número do celular"
        onChange={onChangeEmailPhone}
        disabled={authIsLoading}
      />
      <Input type="password" name="password" label="Senha" disabled={authIsLoading} />
      <Input type="hidden" name="isEmailValue" value={isEmail} />
      <S.ForgotPassword to="/">Esqueci a senha</S.ForgotPassword>
      <S.ButtonContainer>
        <Button type="submit">Entrar</Button>
      </S.ButtonContainer>
    </Form>
  );
};
