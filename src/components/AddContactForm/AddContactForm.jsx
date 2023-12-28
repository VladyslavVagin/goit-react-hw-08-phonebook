import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AddContactForm.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useAddContactMutation } from '../../redux/contactsAPI';
import Loader from 'components/Loader/Loader';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(1).max(24).required(),
  number: yup.number().required(),
});

const AddContactForm = ({ data }) => {
  const [addContact, { isLoading }] = useAddContactMutation();

  const handleSubmit = (dataForm, { resetForm }) => {
    const contNames = data?.map(contact => contact.name);
    if (!contNames.includes(dataForm.name)) {
      addContact({
        name: dataForm.name,
        phone: dataForm.number.replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3'),
      });
      resetForm();
      toast.success('Contact was ADDED');
    } else {
      toast.error('Contact with the same name has already exist!');
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm} autoComplete="true">
        <label className={css.label} htmlFor="name">
          <span className={css.astericks}>&#42;</span>Name:
          <Field type="text" name="name" className={css.input} required />
          <span className={css.additional}>(1 - 24) symbols</span>
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number">
          <span className={css.astericks}>&#42;</span>Phone number:
          <Field
            type="tel"
            name="number"
            className={css.input}
            required
            pattern="[0-9]{9,12}"
          />
          <span className={css.additional}>(9 - 12) numbers</span>{' '}
          <ErrorMessage name="number" component="span" />{' '}
        </label>
        <button className={css.addContactBtn} type="submit">
          {isLoading ? <Loader/> : 'Add contact'}
        </button>
      </Form>
    </Formik>
  );
};

export default AddContactForm;
