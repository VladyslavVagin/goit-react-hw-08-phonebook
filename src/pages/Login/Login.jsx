import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import css from './Login.module.css';
import * as yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../../components/Loader/Loader';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const handleSubmitLogin = (dataForm, { resetForm }) => {
    dispatch(logIn(dataForm));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitLogin}
        validationSchema={schema}
      >
        <Form className={css.formLogin}>
          <h2 className={css.titlePage}>Login form</h2>
          <label htmlFor="email" className={css.label}>
            <span className={css.astericks}>&#42;</span>Email:
            <Field
              type="email"
              name="email"
              required
              className={css.input}
              aria-label="Input for type your name"
            />
          </label>
          <label htmlFor="password" className={css.label}>
            <span className={css.astericks}>&#42;</span>Password:
            <Field
              type={showPassword ? 'text' : 'password'}
              name="password"
              required
              className={css.input}
              aria-label="Input for type your password"
            />
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
            className={css.loginSubmit}
            aria-label="Button for submit login form"
            title="Confirm login"
          >
            {isLoading ? <Loader /> : 'Login'}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
