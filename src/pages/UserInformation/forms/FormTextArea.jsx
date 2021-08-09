import { Form, TextArea, Button } from "../../../components";
import * as S from "./FormStyled";

export const FormTextArea = () => {
  return (
    <Form
      initialValues={{
        medicine: "",
      }}
    >

      <S.TextAreaContainer>
        <S.Content>
          <S.TextAreaTitle>
            REMÉDIOS
          </S.TextAreaTitle>
          <TextArea name="medicine" type="text" placeholder="Escreva e separe por vírgula remédios que são essenciais para sua saúde." />
        </S.Content>
        <S.Content>
          <S.TextAreaTitle>
            CONDIÇÃO ESPECIAL
          </S.TextAreaTitle>
          <TextArea name="medicine" type="text" placeholder="Caso possua alguma necessidade especial, descreva quais são os cuidados necessários que devem ser tomados." />
        </S.Content>
        <S.ButtonContainer>
          <Button width="100px">Editar</Button>
        </S.ButtonContainer>

      </S.TextAreaContainer>
    </Form>
  );
};
