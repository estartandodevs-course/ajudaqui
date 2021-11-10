import { HTMLAttributes, ReactNode } from 'react';

export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
