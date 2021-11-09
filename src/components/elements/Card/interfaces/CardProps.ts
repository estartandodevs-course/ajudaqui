import React, { HTMLAttributes } from 'react';

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode,
  variant?: string,
  day?: string,
  as?: React.ElementType,
}

export const CardDefaultProps: ICardProps = {
  variant: 'default',
};
