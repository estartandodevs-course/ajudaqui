import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Layout, ProfilePhoto } from "../../components";
import { FormContacts } from "./forms/FormContacts";
import { FormTextArea } from "./forms/FormTextArea";
import { PersonalInfos } from "./forms/FormPersonalInfos";
import "antd/dist/antd.css";
import * as S from "./InformationStyled";
import { useAuth } from "../../contexts";

export const UserInformation = () => {
  const { user, isAuthenticated } = useAuth();

  const { push } = useHistory();

  useEffect(() => {
    if (!isAuthenticated) {
      push("select-profile");
    }
  }, []);

  return (
    <Layout hasTabBar>
      <S.ContainerForm>
        <S.UserInformationTitle>
          Informações Pessoais
        </S.UserInformationTitle>
        <S.ContainerProfilePhoto>
          {user.photoURL ? (
            <S.ImgProfile src={user.photoURL} alt={user.name} />
          ) : (
            <ProfilePhoto icon="/assets/svg/icon camera.svg" alt={user.name} />
          )}
          <S.ProfilePhotoText>MUDAR FOTO DE PERFIL</S.ProfilePhotoText>
        </S.ContainerProfilePhoto>
        <S.TabsRegister defaultActiveKey="1">
          <S.TabsChoiced tab="Pessoal" key="1">
            <PersonalInfos />
          </S.TabsChoiced>
          <S.TabsChoiced tab="Saúde" key="2">
            <FormTextArea />
          </S.TabsChoiced>
          <S.TabsChoiced tab="Contatos" key="3">
            <FormContacts />
          </S.TabsChoiced>
        </S.TabsRegister>
      </S.ContainerForm>
    </Layout>
  );
};
