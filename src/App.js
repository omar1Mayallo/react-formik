import FormContainer from "./components/FormContainer";
import {useFormik} from "formik";
import Button from "./components/Button";
import {validationSchema} from "./schemas/validationSchema";
import Notification from "./components/Notification";
import {useState} from "react";
function App() {
  const [active, setActive] = useState(false);
  const handleSubmitForm = async (values, actions) => {
    setActive(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    setActive(false);
    actions.resetForm();
  };
  const {handleBlur, handleChange, handleSubmit, values, errors, touched} =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: handleSubmitForm,
    });

  return (
    <div className="app">
      <Notification
        active={active}
        bgColor={"#fff"}
        text={"Validation successfully"}
      />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className={errors.name && touched.name ? "err-input" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
              type="text"
              placeholder="Name"
            />
            {errors.name && touched.name && (
              <p className="err-msg">{errors.name}</p>
            )}
          </div>
          <div className="form-group">
            <input
              className={errors.email && touched.email ? "err-input" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && touched.email && (
              <p className="err-msg">{errors.email}</p>
            )}
          </div>
          <div className="form-group">
            <input
              className={errors.password && touched.password ? "err-input" : ""}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password && (
              <p className="err-msg">{errors.password}</p>
            )}
          </div>
          <div className="form-group">
            <input
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "err-input"
                  : ""
              }
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="err-msg">{errors.confirmPassword}</p>
            )}
          </div>
          <Button>Submit</Button>
        </form>
      </FormContainer>
    </div>
  );
}

export default App;
