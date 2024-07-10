import { Form, ErrorMessage, Formik, Field } from "formik";
import React, { useState } from "react";
import useSignIn from "../../../hooks/useSignIn"


const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Login = ({handleSignUp}) => {
  const [msg, setMsg] = useState(null);
  const { signIn } = useSignIn();
  return (
    <div>
      <div>
        <div>Login</div>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validate={validate}
          onSubmit={async (values, { resetForm }) => {
            const data = await signIn(values);
            if (!data) {
              setMsg("Invalid Credentials");
            } else {
              alert("Succesfully LoggedIn");
            }
            resetForm({ values: "" });
          }}
        >
          <Form>
            <label htmlFor="username">Username</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" />
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
      <div>{msg ? msg : null}</div>
      <div>
        <button onClick={()=>handleSignUp()}>change</button>
      </div>
    </div>
  );
};

export default Login;
