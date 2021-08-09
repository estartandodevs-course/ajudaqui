import {
  Form, Input, Button,
} from "../../../components";
import { optionsPreference } from "../../../_mock";
import * as S from "./FormStyled";

export const PersonalInfos = () => {
  return (
    <>
      <Form>
        <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
        <Input type="date" name="birthday" label="Data de nascimento" placeholder="01/01/1990" width="168px" />
        <Input type="text" name="gender" label="Gênero" placeholder="Feminino" />
        <Input type="texte" name="address" label="Endereço" placeholder="Rua 00 Casa 00" />
        <Input type="tel" name="phone" label="Telefone" placeholder="(00) 0123-4567" />
        <Form.InputSelect name="prefference" options={optionsPreference} />
        <S.ButtonContainer>
          <Button width="100px">Editar</Button>
        </S.ButtonContainer>
      </Form>
    </>
  );
};
