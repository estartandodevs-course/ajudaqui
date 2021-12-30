import { HTMLAttributes } from 'react';

export interface ISplashScreenProps extends HTMLAttributes<HTMLDivElement> {
  hasButton: boolean,
}

export const SplashScreenDefaultProps: ISplashScreenProps = {
  hasButton: true,
};
