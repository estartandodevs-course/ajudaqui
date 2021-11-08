import { Formik } from 'formik';
import { InputSelect } from '../Select';
import { ContainerForm } from './FormStyled';

export const Form = ({
  initialValues, onSubmit, validationSchema, children, ...restProps
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    {...restProps}
  >
    <ContainerForm>{children}</ContainerForm>
  </Formik>
);

Form.InputSelect = ({ children, ...props }) => (
  <InputSelect as="select" {...props}>
    {children}
  </InputSelect>
);
