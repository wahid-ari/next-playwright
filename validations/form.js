import * as yup from "yup";

const formSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(/^[a-zA-Z ]*$/, "Name must be alphabet")
    .typeError("Name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email must be valid")
    .typeError("Email is required"),
  password: yup
    .string()
    .required("Password is required"),
});

function transformYupErrorsIntoObject(errors) {
  const validationErrors = {};
  errors.inner.forEach((error) => {
    if (error.path !== undefined) {
      validationErrors[error.path] = error.errors[0];
    }
  });
  return validationErrors;
};

export async function validateFormObject(data) {
  try {
    await formSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    const validationErrors = transformYupErrorsIntoObject(err);
    return { valid: false, errors: validationErrors };
  }
};

export async function validateForm(data) {
  try {
    await formSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: [] };
  } catch (err) {
    return { valid: false, errors: err.errors };
  }
};