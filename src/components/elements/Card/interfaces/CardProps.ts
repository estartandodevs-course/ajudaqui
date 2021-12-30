import React, { AllHTMLAttributes } from 'react';

export interface ICardProps extends AllHTMLAttributes<HTMLElement> {
  children?: React.ReactNode,
  variant?: string,
  day?: string,
  as?: any,
  src?: string
}

export const CardDefaultProps: ICardProps = {
  variant: 'default',
};
