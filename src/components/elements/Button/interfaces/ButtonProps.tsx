import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode,
  isLoading?: boolean,
  variant?: string,
  onClick?: () => void,
}

export const ButtonDefaultProps: IButtonProps = {
  variant: 'default',
};

// TODO arrumar typescript
