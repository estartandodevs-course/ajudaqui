import VMasker from 'vanilla-masker';

const standard = (value) => value;

const phone = (value) => {
  const rawValue = value.replace(/[()\-\s]/g, '');
  if (rawValue.length < 11) {
    return VMasker.toPattern(rawValue, '(99) 9999-9999');
  }
  return VMasker.toPattern(rawValue, '(99) 99999-9999');
};

const cep = (value) => {
  const rawValue = value.replace(/[()\-\s]/g, '');
  return VMasker.toPattern(rawValue, '99.999-999');
};

const date = (value) => {
  const rawValue = value.replace(/[/]/g, '');
  return VMasker.toPattern(rawValue, '99/99/9999');
};

const dateTime = (value) => {
  const rawValue = value.replace(/[/]/g, '');
  return VMasker.toPattern(rawValue, '99/99/9999 99:99');
};

const cpf = (value) => {
  const rawValue = value.replace(/[-.]/g, '');
  return rawValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const masks = {
  standard, phone, cep, date, dateTime, cpf,
};
