import { Form, Input, Button } from "../../../components";
import { validationRegisterWithPhone } from "../validations";
import * as S from "./RegisterStyled";

export const RegisterWithPhone = () => {
  return (
    <Form
      initialValues={{
        name: "",
        phone1: "",
        phone2: "",
        password1: "",
        password2: "",
      }}
      validationSchema={validationRegisterWithPhone}
    >
      <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
      <Input type="tel" name="phone1" mask="phone" label="Seu número de celular" placeholder="(00) 0123-4567" />
      <Input type="tel" name="phone2" mask="phone" label="Confirme seu número de celular" placeholder="(00) 0123-4567" />
      <Input type="password" name="password1" label="Sua senha" placeholder="6 ou mais caracteres" />
      <Input type="password" name="password2" label="Confirme sua senha" placeholder="Digite a mesma senha de cima" />
      <S.PositionButton>
        <Button type="submit">CADASTRAR</Button>
      </S.PositionButton>
    </Form>
  );
};
