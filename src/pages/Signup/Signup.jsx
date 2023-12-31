import { Formik, Form, Field } from 'formik';
import css from './Signup.module.css';
import { useState } from 'react';
import * as yup from 'yup';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../../components/Loader/Loader';

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
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { isLoading } = useAuth();

  const handleSubmitRegistration = (dataForm, { resetForm }) => {
    dispatch(register(dataForm));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitRegistration}
        validationSchema={schema}
      >
        <Form className={css.formSignup}>
          <h2 className={css.titlePage}>Registration form</h2>
          <label htmlFor="name" className={css.label}>
            <span className={css.astericks}>&#42;</span>Name:
            <Field type="text" name="name" required className={css.input} aria-label="Input for type your name from 1 to 24 symbols"/>
            <span className={css.additional}>(1 - 24) symbols</span>
          </label>
          <label htmlFor="email" className={css.label}>
            <span className={css.astericks}>&#42;</span>Email:
            <Field type="email" name="email" required className={css.input} aria-label="Input for type your email. After it will use for login in app."/>
          </label>
          <label htmlFor="password" className={css.label}>
            <span className={css.astericks}>&#42;</span>Password:
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              className={css.input}
              aria-label="Input for type your password. After it will use for login in app."
            />
            <span className={css.additional}>(6 - 16) symbols</span>
          </label>
          <label htmlFor="toggle" className={css.label}>
            <Field
              type="checkbox"
              name="toggle"
              onChange={() => setShowPassword(!showPassword)}
              checked={showPassword}
              aria-label="Checkbox for show or hide your password. If checked - password will be shown."
            />{' '}
            {showPassword ? 'Hide password' : 'Show password'}
          </label>
          <button
            type="submit"
            className={css.registerSubmit}
            aria-label="Button for submit registry form"
            title="Confirm register user"
          >
            {isLoading ? <Loader /> : 'Register'}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
