export const Input = ({
  register,
  error,
  label,
  id,
  ...restProps
}) => (
  <>
    <label htmlFor={id}>
      {label}
    </label>
    <input
      ref={register}
      id={id}
      {...restProps}
    />
    {error && (
    <div>
      {error.message}
    </div>
    )}
  </>
);
