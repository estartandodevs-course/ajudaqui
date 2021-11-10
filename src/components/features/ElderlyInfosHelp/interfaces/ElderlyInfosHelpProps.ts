import { HTMLAttributes } from 'react';

interface IContacts {
  phone: string,
  kinship: string,
}

interface IHealth {
  medicine: string
  specialConditions: string
}

interface Contacts extends Array<IContacts> {}

interface ElderlyInfos {
  name: string,
  health: IHealth,
  contacts: Contacts,
  photoURL: string
}

export interface IElderlyInfosHelpProps extends HTMLAttributes<HTMLDivElement>{
  elderlyInfos: ElderlyInfos,
  helpRequestId: string | number
}
