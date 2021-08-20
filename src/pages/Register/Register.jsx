import { Layout } from "../../components";
import { RegisterWithEmail, RegisterWithPhone } from "./forms";
import "antd/dist/antd.css";
import * as S from "./RegisterStyled";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";


export const Register = ({ ...restProps }) => {
  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;
  return (
    <Layout showNavigation={showNavigation}>
      <S.ContainerPageDesktop>
        <S.ContainerRegistrations {...restProps}>
          <S.ContainerLogo>
            <S.ImageLogo src="/assets/images/logo.png" />
            <S.ImageText src="/assets/svg/AJUDAQUI.svg" />
          </S.ContainerLogo>
          <S.ContentTitle>
            <S.TitleRegistrations>
              Faremos seu cadastro
            </S.TitleRegistrations>
            <S.DescriptionRegistrations>
              Escolha como deseja fazer seu cadastro
            </S.DescriptionRegistrations>
            <S.TabsRegister defaultActiveKey="1">
              <S.TabsChoiced tab="Cadastrar celular" key="1">
                <RegisterWithPhone />
              </S.TabsChoiced>
              <S.TabsChoiced tab="Cadastrar e-mail" key="2">
                <RegisterWithEmail />
              </S.TabsChoiced>
            </S.TabsRegister>
            <S.HasRegister to="/login">
              Já possui cadastro?
            </S.HasRegister>
          </S.ContentTitle>
        </S.ContainerRegistrations>
        <S.SelectAside>
          <S.AsideImage src="/assets/svg/onboardingVoluntary2.svg" />
          <S.TitleOnboarding>
            Encontre idosos de forma rápida,
            escolha qual atividade quer realizar de acordo com o seu tempo e a proximidade do local
          </S.TitleOnboarding>
        </S.SelectAside>
      </S.ContainerPageDesktop>
    </Layout>
  );
};
