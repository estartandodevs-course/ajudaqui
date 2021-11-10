import { HTMLAttributes } from 'react';

interface Voluntary {
  id: string,
  evaluation: string | number
}

interface Order {
  option: string,
}

interface HelpRequest {
  status: number,
  voluntary: Voluntary,
  photoURL: string,
  name: string,
  order: Order,
  createdAt: string,
  startTime: string,
  endTime: string,
}

export interface IOrderCardProps extends HTMLAttributes<HTMLDivElement> {
  helpRequest: HelpRequest,
  $isActive: boolean,
}
