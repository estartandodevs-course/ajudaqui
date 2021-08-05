import { Formik } from "formik";

export const Form = ({
  initialValues, onSubmit, validationSchema, ...restProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...restProps}
    />
  );
};
