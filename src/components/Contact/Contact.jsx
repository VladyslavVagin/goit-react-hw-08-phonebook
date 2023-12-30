import trashIcon from '../../icons/trash.png';
import editIcon from '../../icons/edit-button.png';
import css from './Contact.module.css';
import { useDeleteContactMutation } from '../../redux/contacts/contactsAPI';
import { useState } from 'react';
import EditContactForm from 'components/EditContactForm/EdirContactForm';
import Loader from 'components/Loader/Loader';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const [showEditForm, setShowEditForm] = useState(false);
  const [deleteContact, {isLoading: isDeleting} ] = useDeleteContactMutation();

  return (
    <>
    {showEditForm && <EditContactForm/>}
    <tr className={css.tr}>
      <td className={css.name}>{name}</td>
      <td className={css.phone}>{number}</td>
      <td className={css.delete}>
      <button
          type="button"
          className={css.deleteBtn}
          id={id}
          onClick={() => setShowEditForm(!showEditForm)}
          title='Edit contact'
        >
          <img src={editIcon} alt="trash icon" width={16} />
        </button>
        {' '}
        <button
          type="button"
          className={css.deleteBtn}
          id={id}
          onClick={() => deleteContact(id)}
          title='Delete contact'
        >
          {isDeleting ? <Loader/> : <img src={trashIcon} alt="trash icon" width={16} />}
        </button>
      </td>
    </tr></>
  );
};

export default Contact;
