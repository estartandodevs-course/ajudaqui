import React from "react";
import * as S from "./SelectProfileTypeStyles";
import { Card } from "../Card";


function SelectProfileType() {
  return (
    <div>
      <S.InputCheck name="check" id="check" type="checkbox" />
      <label htmlFor="check">
        <Card variant="outlined" width="300px" />
      </label>
    </div>

  );
}

export { SelectProfileType };

