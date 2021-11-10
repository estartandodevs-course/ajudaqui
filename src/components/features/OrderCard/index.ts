import { useAuth } from '../../../contexts';
import { PROFILES_TYPES } from '../../../utils/constants/profilesTypes';

export const OrderCard = () => {
  const { profileType } = useAuth();

  const COMPONENT = profileType === PROFILES_TYPES.ELDERLY;
  console.debug(COMPONENT);

  return 'OrderCard';
};
