import React from "react";
import * as S from "./SelectProfileTypeStyles";
import { Card } from "../Card";


function SelectProfileType() {
  return (
    <S.ContainerInput>
      <>
        <S.ElderlyInputCheck name="check" id="check" type="checkbox" />
        <label htmlFor="check">
          <div>
            <Card variant="outlined" width="140px" height="155px" src="/assets/svg/card-idoso.svg" textAlign="center">
              Idoso ou responsável pelo idoso
            </Card>
          </div>
        </label>
      </>

      <>
        <S.VoluntayInputCheck name="testecheck" id="testecheck" type="checkbox" />
        <label htmlFor="testecheck">
          <Card variant="outlined" width="140px" height="155px" src="/assets/svg/card-voluntario.svg" textAlign="center">
            Voluntário
          </Card>
        </label>
      </>
    </S.ContainerInput>

  );
}

export { SelectProfileType };

