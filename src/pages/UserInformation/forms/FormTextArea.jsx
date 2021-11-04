import { Form, TextArea, Button } from '../../../components';
import { useAuth } from '../../../contexts';
import { validationHealthInformation } from '../validations';
import * as S from './FormStyled';

export const FormTextArea = () => {
  const { user, loadingAuth, updateProfile } = useAuth();

  const initialValues = {
    health: {
      medicine: user?.health.medicine || '',
      specialConditions: user?.health.specialConditions || '',
    },
  };

  const handleSubmit = async (values) => {
    await updateProfile(
      user.profileType,
      user.id,
      {
        ...user,
        ...values,
      },
    );
  };

  const getValues = Object.values(initialValues.health);

  const verify = !(getValues.includes('')) ? 'Editar' : 'Salvar';

  return (
    <Form
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationHealthInformation}
      onSubmit={handleSubmit}
    >
      <S.TextAreaContainer>
        <S.Content>
          <S.TextAreaTitle>
            REMÉDIOS
          </S.TextAreaTitle>
          <TextArea
            name="health.medicine"
            placeholder="Escreva e separe por vírgula remédios que são essenciais para sua saúde."
          />
        </S.Content>
        <S.Content>
          <S.TextAreaTitle>
            CONDIÇÃO ESPECIAL
          </S.TextAreaTitle>
          <TextArea
            type="text"
            name="health.specialConditions"
            placeholder="Caso possua alguma necessidade especial, descreva quais são os cuidados necessários que devem ser tomados."
          />
        </S.Content>
        <S.ButtonContainer>
          <Button
            width="100px"
            isLoading={loadingAuth}
            disabled={loadingAuth}
            type="submit"
          >
            {verify}
          </Button>
        </S.ButtonContainer>
      </S.TextAreaContainer>
    </Form>
  );
};
