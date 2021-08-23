import React from "react";
import * as S from "./ElderlyInfosHelpStyled";

export const ElderlyInfosHelp = ({ props }) => {
  const {
    problem, medicines, sonNumber, otherResponsible, text,
  } = props;
  return (
    <S.Card>
      <S.ContainerProfile>
        <S.ImageElderly src="/assets/images/oldman-8.jpg" alt="" />
        <S.NameElderly>Francisco</S.NameElderly>
      </S.ContainerProfile>
      <S.ContainerProblem>
        <S.Texts>
          Possui
          {problem}
          <S.IconEmergency src="/assets/svg/icon-saude.svg.svg" alt="" />
        </S.Texts>
      </S.ContainerProblem>
      <S.ContainerMedicines>
        <S.TextsTitles>Medicamentos:</S.TextsTitles>
        <S.Texts>
          {medicines}
        </S.Texts>
        <S.Texts>
          {medicines}
        </S.Texts>
      </S.ContainerMedicines>
      <S.ContainerEmergency>
        <S.TextTitleEmergency>Em casosos de emergência ligar:</S.TextTitleEmergency>
        <S.Texts>
          {sonNumber}
          <S.Icons src="/assets/svg/icon-telefone.svg " alt="" />
          <a href={`https://web.whatsapp.com/send?text=${text}&phone=+55${sonNumber}`}>
            <S.Icons src="/assets/svg/icon-whatsapp.svg  " alt="" />
          </a>

        </S.Texts>
        <S.Texts>
          {otherResponsible}
          <S.Icons src="/assets/svg/icon-telefone.svg " alt="" />
          <a href={`https://web.whatsapp.com/send?text=${text}&phone=+55${otherResponsible}`}>
            <S.Icons src="/assets/svg/icon-whatsapp.svg  " alt="" />
          </a>
        </S.Texts>
      </S.ContainerEmergency>
      <S.ContainerTextFinal>
        <S.TextFinal>
          Você pode enviar uma mensagem automática
          para o whatsapp de um dos familiares clicando
          no ícone ao lado do telefone
        </S.TextFinal>
      </S.ContainerTextFinal>
      <S.ContainerButton>
        <S.ContentButtom width="312px" borderRadius="0">
          IR AO LOCAL
          <S.ContentArrow src="/assets/svg/right arrow.svg" alt="" />
        </S.ContentButtom>
      </S.ContainerButton>
    </S.Card>
  );
};
