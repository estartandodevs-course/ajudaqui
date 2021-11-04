import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EMERGENCY_MESSAGE } from '../../utils/constants';
import * as S from './ElderlyInfosHelpStyled';

export const ElderlyInfosHelp = ({ elderlyInfos, helpRequestId }) => {
  const {
    name, health, contacts, photoURL,
  } = elderlyInfos;

  const navigation = useNavigate();

  return (
    <S.Card>
      <S.ContainerProfile>
        {photoURL
          ? (
            <S.ImageElderly
              src={photoURL}
              alt={name}
            />
          )
          : (
            <S.ImageElderly
              src="/assets/images/placeholder.png"
              alt="placeholder"
            />
          )}
        <S.NameElderly>
          {name}
        </S.NameElderly>
      </S.ContainerProfile>
      <S.ContainerProblem>
        <S.Texts>
          {health.specialConditions && 'Possui'}
          <S.Problem>
            {health.specialConditions}
          </S.Problem>
          <S.IconEmergency
            src="/assets/svg/icon-saude.svg.svg"
            alt="icone de saude"
          />
        </S.Texts>
      </S.ContainerProblem>
      <S.ContainerMedicines>
        <S.TextsTitles>
          Medicamentos:
        </S.TextsTitles>
        {health.medicine.length > 0
        && health?.medicine?.split('; ').map((medicine) => (
          <S.Texts key={medicine}>
            {medicine}
          </S.Texts>
        ))}
      </S.ContainerMedicines>
      <S.ContainerEmergency>
        <S.TextTitleEmergency>
          Em casos de emergência ligar:
        </S.TextTitleEmergency>
        {contacts.map((contact) => (
          <S.Texts key={contact.phone}>
            {`${contact.phone} (${contact.kinship})`}
            <S.Icons
              src="/assets/svg/icon-telefone.svg "
              alt="icone de telefone"
            />
            <a
              href={`https://web.whatsapp.com/send?text=${EMERGENCY_MESSAGE}&phone=+55${contact.phone}`}
            >
              <S.Icons
                src="/assets/svg/icon-whatsapp.svg  "
                alt="icone de whatsapp"
              />
            </a>
          </S.Texts>
        ))}
      </S.ContainerEmergency>
      <S.ContainerTextFinal>
        <S.TextFinal>
          Você pode enviar uma mensagem automática
          para o whatsapp de um dos familiares clicando
          no ícone ao lado do telefone
        </S.TextFinal>
      </S.ContainerTextFinal>

      <S.ContentButtom
        borderRadius="0"
        onClick={() => {
          navigation(`/order-status/${helpRequestId}`);
        }}
      >
        IR AO LOCAL
        <S.ContentArrow
          src="/assets/svg/right arrow.svg"
          alt="arrow"
        />
      </S.ContentButtom>

    </S.Card>
  );
};
