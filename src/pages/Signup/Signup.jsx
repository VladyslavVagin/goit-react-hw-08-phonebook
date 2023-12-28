import React from 'react';
import { Formik, Form, Field } from 'formik';
import css from './Signup.module.css'
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(24).required(),
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Signup = () => {
  const handleSubmit = dataForm => {
    console.log(dataForm);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema}>
      <Form className={css.formSignup}>
        <label htmlFor="name">
          <Field type="text" name="name" required className={css.input}/>
        </label>
        <label htmlFor="email">
          <Field type="email" name="email" required className={css.input}/>
        </label>
        <label htmlFor="password">
          <Field type="password" name="password" required className={css.input}/>
        </label>
        <button type="submit">SignUp</button>
      </Form>
    </Formik>
  );
};

export default Signup;
