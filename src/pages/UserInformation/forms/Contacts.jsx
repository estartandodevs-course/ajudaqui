import { Form, Input } from "../../../components";
import * as S from "./FormStyled";

export const Contacts = () => {
  return (
    <Form
      initialValues={{
        name: "",
        kinship: "",
        phone: "",
      }}
    >
      <S.ContactSection>
        <Input type="text" name="name" label="Nome do contato" placeholder="Nome do responsável" />
        <Input type="text" name="kinship" label="Parentesco" placeholder="Filho(a)" />
        <Input type="tel" mask="phone" name="phone" label="Telefone" placeholder="(00) 0123-4567" />
      </S.ContactSection>
    </Form>
  );
};
