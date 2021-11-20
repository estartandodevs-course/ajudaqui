import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
  isLoading?: boolean,
  variant?: string,
}

export const ButtonDefaultProps: IButtonProps = {
  variant: 'default',
};
