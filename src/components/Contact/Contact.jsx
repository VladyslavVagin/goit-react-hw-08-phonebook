import trashIcon from '../../icons/trash.png';
import css from './Contact.module.css';
import { useDeleteContactMutation } from '../../redux/contactsAPI';
import Loader from 'components/Loader/Loader';

const Contact = ({ contact }) => {
  const { id, name, phone } = contact;
  const [deleteContact, {isLoading: isDeleting} ] = useDeleteContactMutation();

  return (
    <tr className={css.tr}>
      <td className={css.name}>{name}</td>
      <td className={css.phone}>{phone}</td>
      <td className={css.delete}>
        {' '}
        <button
          type="button"
          className={css.deleteBtn}
          id={id}
          onClick={() => deleteContact(id)}
        >
          {isDeleting ? <Loader/> : <img src={trashIcon} alt="trash icon" width={16} />}
        </button>
      </td>
    </tr>
  );
};

export default Contact;
