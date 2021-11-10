import { HTMLAttributes } from 'react';

interface Order {
  option: string,
  key: string,
}

interface Elderly {
  id: string | number,
}

interface HelpRequestData {
  elderly: Elderly,
  order: Order,
  createdAt: string,
  status: number,
  id: string | number,
}

export interface IHelpRequestCardProps extends HTMLAttributes<HTMLDivElement> {
  helpRequestData: HelpRequestData,
  isVoluntary: boolean,

}
