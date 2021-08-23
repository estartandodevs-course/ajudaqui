
import { Formik, Form, FieldArray } from "formik";
import { Button, Input } from "../../../components";
import { Contacts } from "./Contacts";
import * as S from "./FormStyled";
import { useAuth } from "../../../contexts";

export const FormContacts = () => {
  const { user, loadingAuth, updateProfile } = useAuth();

  const initialValues = {
    contacts: user.contacts || [{
      name: "",
      kinship: "",
      phone: "",
    }],
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

  return (
    <Formik
      onSubmit={handleSubmit}
      enableReinitialize
      initialValues={initialValues}
      validateOnMount
    >
      {({ values }) => (
        <Form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <FieldArray
            name="contacts"
            render={(arrayHelpers) => (
              <>
                {values.contacts && values.contacts.length > 0 && (
                  values.contacts.map((_, index) => (
                    <Contacts key={`contacts-${index + 2}`}>
                      <Input
                        type="text"
                        name={`contacts[${index}].name`}
                        label="Nome do contato"
                        placeholder="Nome do responsável"
                      />
                      <Input
                        type="text"
                        name={`contacts[${index}].kinship`}
                        label="Parentesco"
                        placeholder="Filho(a)"
                      />
                      <Input
                        type="tel"
                        mask="phone"
                        name={`contacts[${index}].phone`}
                        label="Telefone"
                        placeholder="(00) 0123-4567"
                      />
                    </Contacts>
                  ))
                )}
                <S.NewContact onClick={() => arrayHelpers.push({
                  name: "",
                  kinship: "",
                  phone: "",
                })}
                >
                  NOVO CONTATO
                </S.NewContact>
                <S.ButtonContainer>
                  <Button
                    width="100px"
                    isLoading={loadingAuth}
                    disabled={loadingAuth}
                    type="submit"
                  >
                    Editar
                  </Button>
                </S.ButtonContainer>
              </>
            )}
          />
        </Form>
      )}
    </Formik>
  );
};
