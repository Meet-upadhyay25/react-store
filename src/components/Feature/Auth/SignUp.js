import { Formik, Field, ErrorMessage, Form } from "formik";
import React from "react";

const validate = (values) => {
  const errors = {}
  if(!values.email){
    errors.email="Required"
  }

  if(!values.username){
    errors.username = "Required"
  }

  if(!values.password){
    errors.password = "Required"
  }

  if(!values.firstname){
    errors.firstname = "Required"
  }

  if(!values.lastname){
    errors.lastname = "Required"
  }

  if(!values.city){
    errors.city = "Required"
  }

  if(!values.street){
    errors.street = "Required"
  }

  if(!values.number){
    errors.number = "Required"
  }

  if(!values.zipcode){
    errors.zipcode = "Required"
  }

  if(!values.phone){
    errors.phone = "Required"
  }

  return errors
}

const SignUp = ({handleSignUp}) => {
  return (
    <>
      <div>SignUp</div>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          firstname: "",
          lastname: "",
          city: "",
          street: "",
          number: "",
          zipcode: "",
          phone: "",
        }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          // resetForm({ values: "" });
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />

          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />

          <label htmlFor="firstname">FirstName</label>
          <Field name="firstname" type="text" />
          <ErrorMessage name="firstname" />

          <label htmlFor="lastname">LastName</label>
          <Field name="lastname" type="text" />
          <ErrorMessage name="lastname" />

          <label htmlFor="city">City</label>
          <Field name="city" type="text" />
          <ErrorMessage name="city" />

          <label htmlFor="street">Street</label>
          <Field name="street" type="text" />
          <ErrorMessage name="street" />

          <label htmlFor="number">Number</label>
          <Field name="number" type="text" />
          <ErrorMessage name="number" />

          <label htmlFor="zipcode">zipCOde</label>
          <Field name="zipcode" type="text" />
          <ErrorMessage name="zipcode" />

          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text" />
          <ErrorMessage name="phone" />

          <button type="submit">SignUp</button>
        </Form>
      </Formik>
      <div onClick={()=>handleSignUp()}>Do You already have an account ? LoginIn</div>
    </>
  );
};

export default SignUp;
