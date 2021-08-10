import { useField, useFormikContext } from "formik";
import Select, { components } from "react-select";
import * as S from "./SelectStyled";
import { customStyles } from "./SelectStyled";

const DropdownIndicator = (
  props,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <S.IconSelect src="/assets/svg/arrow.svg" alt="arrow" />
    </components.DropdownIndicator>
  );
};

export const InputSelect = ({
  options = [], name, id, label, ...restProps
}) => {
  const { value } = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.value);
  };
  return (
    <S.SelectWrapper>
      <S.Label htmlFor={id || name}>{label}</S.Label>
      <Select
        styles={customStyles}
        name={name}
        components={{ DropdownIndicator }}
        options={options}
        value={options.find(({ value: _value }) => _value === value)}
        onChange={handleChange}
        {...restProps}
      />
    </S.SelectWrapper>
  );
};

