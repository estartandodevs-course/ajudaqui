import { Form, Input, Button } from "../../../components";
import { useAuth } from "../../../contexts";
import { validationRegisterWithEmail } from "../validations";
import * as S from "./RegisterStyled";

const RegisterWithEmail = () => {
  const {
    profileType, authIsLoading, registerEmail,
  } = useAuth();
  return (
    <Form
      initialValues={{
        name: "",
        email1: "",
        email2: "",
        password1: "",
        password2: "",
      }}
      validationSchema={validationRegisterWithEmail}
      onSubmit={async ({ name, email1, password1 }) => {
        await registerEmail({ name, email: email1, password: password1 }, profileType);
      }}
    >
      <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" disabled={authIsLoading} />
      <Input type="text" name="email1" label="Seu e-mail" placeholder="nome@example.com" disabled={authIsLoading} />
      <Input type="text" name="email2" label="Confirme seu e-mail" placeholder="nome@example.com" disabled={authIsLoading} />
      <Input type="password" name="password1" label="Sua senha" placeholder="6 ou mais caracteres" disabled={authIsLoading} />
      <Input type="password" name="password2" label="Confirme sua senha" placeholder="Digite a mesma senha de cima" disabled={authIsLoading} />
      <S.PositionButton>
        <Button type="submit">CADASTRAR</Button>
      </S.PositionButton>
    </Form>
  );
};

export { RegisterWithEmail };
