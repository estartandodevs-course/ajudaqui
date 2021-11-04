import { useAuth } from '../../contexts';
import { PROFILES_TYPES } from '../../utils/constants';
import { OrderCardElderly } from './OrderCardElderly';
import { OrderCardVoluntary } from './OrderCardVoluntary';

export const OrderCard = (props) => {
  const { profileType } = useAuth();

  const COMPONENT = profileType === PROFILES_TYPES.ELDERLY ? OrderCardElderly : OrderCardVoluntary;

  return <COMPONENT {...props} />;
};
