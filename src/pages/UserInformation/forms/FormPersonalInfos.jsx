import {
  Form, Input, Button,
} from '../../../components';
import { useAuth } from '../../../contexts';
import { optionsPreference } from '../../../_mock';
import * as S from './FormStyled';

export const PersonalInfos = () => {
  const { user, loadingAuth, updateProfile } = useAuth();

  const initialValues = {
    name: user.name || '',
    birthday: user.birthday || '',
    gender: user.gender || '',
    location: {
      city: user.location.city || '',
      uf: user.location.uf || '',
      address: user.location.address || '',
    },
    phoneNumber: user.phoneNumber || '',
    helpPreferrence: user.helpPreferrence || '',
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

  const verify = () => {
    const keys = Object.keys(initialValues);
    const values = Object.values(keys);

    return !(values.includes('')) ? 'Editar' : 'Salvar';
  };

  return (
    <Form
      initialValues={initialValues}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      <Input type="text" name="name" label="Nome completo" placeholder="Nome completo" />
      <Input type="date" name="birthday" label="Data de nascimento" placeholder="01/01/1990" width="168px" />
      <Input type="text" name="gender" label="Gênero" placeholder="Feminino" />
      <Input type="text" name="location.address" label="Endereço" placeholder="Rua 00 Casa 00" />
      <Input type="text" name="location.city" label="Cidade" placeholder="São paulo" />
      <Input type="text" name="location.uf" label="Estado" placeholder="SP" />
      <Input type="tel" mask="phone" name="phoneNumber" label="Telefone" placeholder="(00) 0123-4567" />
      <Form.InputSelect label="Preferência de ajuda" name="helpPreferrence" options={optionsPreference} />
      <S.ButtonContainer>
        <Button
          width="100px"
          type="submit"
          isLoading={loadingAuth}
          disabled={loadingAuth}
        >
          {verify()}
        </Button>
      </S.ButtonContainer>
    </Form>
  );
};
