import { Formik } from "formik";
import { ContainerForm } from "./FormStyled";

export const Form = ({
  initialValues, onSubmit, validationSchema, children, ...restProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...restProps}
    >
      <ContainerForm>{children}</ContainerForm>
    </Formik>
  );
};
