import { Formik, Form, Field } from 'formik';
import css from './Login.module.css';
import * as yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().min(5).required(),
  password: yup.string().min(6).max(16).required(),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmitLogin = (dataForm, {resetForm}) => {
      console.log(dataForm);
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
            <Field type="email" name="email" required className={css.input} />
          </label>
          <label htmlFor="password" className={css.label}>
            <span className={css.astericks}>&#42;</span>Password:
            <Field
              type="password"
              name="password"
              required
              className={css.input}
            />
          </label>
          <button type="submit" className={css.loginSubmit}>
           Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;