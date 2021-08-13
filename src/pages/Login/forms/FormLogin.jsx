import { useState } from "react";
import { Input, Form, Button } from "../../../components";
import { validationLogin } from "../validation";
import * as S from "../LoginStyled";
import { loginWithEmailAndPassword } from "../../../services";
import { useAuth } from "../../../contexts";

export const FormLogin = () => {
  const [isEmail, setIsEmail] = useState(false);

  const onChangeEmailPhone = (e) => {
    const email = e.target.value.includes("@");
    if (email) {
      setIsEmail(true);
    } else (setIsEmail(false));
  };

  const {
    profileType,
    setUser,
    setAuthIsLoading,
    authIsLoading,
  } = useAuth();

  const handleSubmit = async ({ emailOrPhone, password }) => {
    setAuthIsLoading(true);

    if (emailOrPhone.includes("@")) {
      const { user } = await loginWithEmailAndPassword(
        {
          email: emailOrPhone,
          password,
        },
        profileType,
      );

      setUser(user);
    }

    setAuthIsLoading(false);
  };

  return (
    <Form
      initialValues={{
        emailOrPhone: "",
        password: "",
      }}
      validationSchema={validationLogin}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        name="emailOrPhone"
        label="E-mail ou número do celular"
        onChange={onChangeEmailPhone}
        disabled={authIsLoading}
      />
      <Input
        type="password"
        name="password"
        label="Senha"
        disabled={authIsLoading}
      />
      <Input type="hidden" name="isEmailValue" value={isEmail} />
      <S.ForgotPassword to="/">
        Esqueci a senha
      </S.ForgotPassword>
      <S.ButtonContainer>
        <Button type="submit">Entrar</Button>
      </S.ButtonContainer>
    </Form>
  );
};

