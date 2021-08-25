import { Layout, Button } from "../../components";
import * as S from "./IssueCertificateStyled";

export const IssueCertificate = () => {
  return (
    <Layout hasTabBar>
      <S.ContainerPage>
        <S.VoluntaryName>
          Pedro Lucas
        </S.VoluntaryName>
        <S.Paragraph>
          Você possui um total de 30hrs de voluntariado, deseja emitir seu certificado?
        </S.Paragraph>
        <S.ContainerImage>
          <S.ImageLogo src="/assets/images/logo.png" alt="Logo" />
        </S.ContainerImage>
        <Button width="190px">
          Emitir certificado
        </Button>
        <S.Paragraph2>
          Lembrando que é necessário ter no mínimo 10hrs de voluntariado.
        </S.Paragraph2>
        <S.Ellipsis src="assets/svg/Ellipsis.svg" />
        <S.CertificateText>
          Certificados
        </S.CertificateText>
      </S.ContainerPage>
    </Layout>
  );
};
