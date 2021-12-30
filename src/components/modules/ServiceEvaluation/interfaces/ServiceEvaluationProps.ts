import { HTMLAttributes, ReactNode } from 'react';

export interface IServiceEvaluationProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode,
  $active?: boolean,
}
