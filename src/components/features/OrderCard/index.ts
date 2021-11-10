import { Component, PropsWithChildren, ReactChildren } from 'react';
import { useAuth } from '../../../contexts/';
import { PROFILES_TYPES } from '../../../utils/constants/profilesTypes';
import { OrderCardElderly } from './OrderCardElderly';
import { OrderCardVoluntary } from './OrderCardVoluntary';

export const OrderCard = ({ children, ...restProps }: PropsWithChildren<ReactChildren>) => {
  const { profileType } = useAuth();

  const COMPONENT: any =  profileType === PROFILES_TYPES.ELDERLY
  ? OrderCardElderly
  : OrderCardVoluntary;

  return <COMPONENT {...restProps} />;
};
