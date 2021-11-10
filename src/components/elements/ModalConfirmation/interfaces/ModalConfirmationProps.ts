import { HTMLAttributes, ReactNode } from 'react';

export interface IModalConfirmationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  component: ReactNode
}
