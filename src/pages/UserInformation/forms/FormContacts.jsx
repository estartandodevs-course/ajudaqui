import { Form, Input, Button } from "../../../components";
import * as S from "./FormStyled";

export const FormContacts = () => {
  return (
    <Form>
      <S.ContactSection>
        <Input type="text" name="name" label="Nome do contato" placeholder="Nome do responsável" />
        <Input type="text" name="kinship" label="Parentesco" placeholder="Filho(a)" />
        <Input type="tel" name="phone" label="Telefone" placeholder="(00)0123-4567" />
      </S.ContactSection>
      <S.ContactSection>
        <Input type="text" name="name" label="Nome do contato" placeholder="Nome do responsável" />
        <Input type="text" name="kinship" label="Parentesco" placeholder="Filho(a)" />
        <Input type="tel" name="phone" label="Telefone" placeholder="(00)    0123-4567" />
      </S.ContactSection>
      <S.NewContact>
        NOVO CONTATO
      </S.NewContact>
      <S.ButtonContainer>
        <Button width="100px">Editar</Button>
      </S.ButtonContainer>
    </Form>
  );
};
