import { useState } from "react";
import { Form, Button } from "../../../components";
import { Contacts } from "./Contacts";
import * as S from "./FormStyled";

export const FormContacts = () => {
  const [newContact, setNewContact] = useState(false);
  return (
    <Form>
      <Contacts />
      {newContact && <Contacts />}
      <S.NewContact onClick={() => setNewContact(true)}>
        NOVO CONTATO
      </S.NewContact>
      <S.ButtonContainer>
        <Button width="100px">Editar</Button>
      </S.ButtonContainer>
    </Form>
  );
};
