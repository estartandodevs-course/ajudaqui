import { useField } from "formik";
import Select from "react-select";
import { customStyles } from "./SelectStyled";

export const InputSelect = ({ options = [], name, ...restProps }) => {
  const [meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  const handleChange = (e) => {
    setValue(e.value);
  };
  return (
    <Select
      styles={customStyles}
      name={name}
      options={options}
      value={options.find(({ value: _value }) => _value === value)}
      onChange={handleChange}
      {...restProps}
    />
  );
};

