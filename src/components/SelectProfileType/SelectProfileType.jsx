import { useState, useEffect } from 'react';
import { PROFILES_TYPES } from '../../utils/constants';
import * as S from './SelectProfileTypeStyles';
import { Card } from '../Card';

export const SelectProfileType = ({ onChange, initialState }) => {
  const [selectedType, setSelectedType] = useState(initialState);

  useEffect(() => {
    if (selectedType && onChange) {
      onChange(selectedType);
    }
  }, [selectedType]);

  return (
    <S.ProfileTypeWrapper>
      <S.ProfileLabel
        selectedType={selectedType === PROFILES_TYPES.ELDERLY}
        onClick={() => setSelectedType(PROFILES_TYPES.ELDERLY)}
      >
        <Card
          variant="outlined"
          src="/assets/svg/card-idoso.svg"
        >
          Idoso ou responsável pelo idoso
        </Card>
      </S.ProfileLabel>

      <S.ProfileLabel
        selectedType={selectedType === PROFILES_TYPES.VOLUNTARY}
        onClick={() => setSelectedType(PROFILES_TYPES.VOLUNTARY)}
      >
        <Card
          variant="outlined"
          src="/assets/svg/card-voluntario.svg"
        >
          Voluntário
        </Card>
      </S.ProfileLabel>
    </S.ProfileTypeWrapper>
  );
};
