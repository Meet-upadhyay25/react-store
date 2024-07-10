import { Form, ErrorMessage, Formik, Field } from "formik";
import React, { useState } from "react";
import useSignIn from "../../../hooks/useSignIn";

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

const Login = ({ handleSignUp }) => {
  const [msg, setMsg] = useState(null);
  const { signIn } = useSignIn();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
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
              alert("Successfully Logged In");
            }
            resetForm({ values: "" });
          }}
        >
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <Field name="username" type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field name="password" type="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300">Login</button>
            </div>
          </Form>
        </Formik>
        {msg && <div className="mt-4 text-center text-red-500">{msg}</div>}
        <div className="mt-4 text-center">
          <p className="text-gray-700">Don't have an account? <span onClick={handleSignUp} className="text-blue-500 cursor-pointer hover:underline">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
