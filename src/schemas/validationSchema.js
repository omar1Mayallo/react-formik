import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "must be at least 3 characters long")
    .max(30, "must be at least 3 characters long")
    .required("required"),
  email: yup.string().email("must be a valid email").required("required"),
  password: yup
    .string()
    .min(6, "must be at least 6 characters or numbers long")
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't matches")
    .required("required"),
});
