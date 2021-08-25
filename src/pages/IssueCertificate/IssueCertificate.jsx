import React from "react";
import { Layout, Button } from "../../components";
import * as S from "./IssueCertificateStyled";
import { certificateDatas } from "../../_mock";
import { useWidthScreen } from "../../utils/hooks/useWidthScreen";

export const IssueCertificate = (props) => {
  const {
    userName, hours,
  } = props;

  const [widthScreen] = useWidthScreen();

  const showNavigation = widthScreen < 1200;

  return (
    <Layout hasTabBar showNavigation={showNavigation}>
      <S.ContainerDesktop>
        <S.ContainerPage>
          <S.VoluntaryName>
            Pedro Lucas
            {userName}
          </S.VoluntaryName>
          <S.Paragraph>
            Você possui um total de
            30hrs
            {hours}
            de voluntariado, deseja emitir seu certificado?
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

          {certificateDatas.map((item) => (
            <S.CertificateContainer key={item.id}>
              <S.CertificateContent>
                {`Certificado de ${item.hours} emitido em ${item.date}`}
              </S.CertificateContent>

              <S.ImageDownload src={item.img} />
            </S.CertificateContainer>
          ))}

        </S.ContainerPage>
        <S.Aside>
          <S.ImageAside src="/assets/svg/arte voluntario.svg" alt="Voluntário" />
        </S.Aside>
      </S.ContainerDesktop>
    </Layout>
  );
};
