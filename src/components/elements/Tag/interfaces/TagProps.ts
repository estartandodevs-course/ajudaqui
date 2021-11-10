import { HTMLAttributes } from 'react';

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  isActive: boolean,
  children: string,
}
