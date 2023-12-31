import trashIcon from '../../icons/trash.png';
import editIcon from '../../icons/edit-button.png';
import cancelIcon from '../../icons/forbidden.png';
import css from './Contact.module.css';
import {
  useDeleteContactMutation,
  useChangeContactMutation,
  useGetContactsQuery,
} from '../../redux/contacts/contactsAPI';
import { useState } from 'react';
import { toast } from 'react-toastify';
import EditContactForm from 'components/EditContactForm/EdirContactForm';
import Loader from 'components/Loader/Loader';

const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const [showEditForm, setShowEditForm] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const { data } = useGetContactsQuery();
  const [changeContact] = useChangeContactMutation();
  const contactExistName = data.some(cont => cont.name === newName & cont.id !== id || cont.number === newNumber & cont.id !== id);

  const handleEditContact = () => {
    setShowEditForm(false);
    if (!contactExistName && newName.trim() !== '' && newNumber.trim() !== '') {
      changeContact({ id, name: newName, number: newNumber });
    } else {
      toast.error('Error, incorrect input or same contact exists');
    }
  };

  return (
    <>
      {showEditForm && (
        <EditContactForm
          setNewName={setNewName}
          setNewNumber={setNewNumber}
          onClick={handleEditContact}
        />
      )}
      <tr className={css.tr}>
        <td className={css.name}>
          {' '}
          <button
            type="button"
            className={css.deleteBtn}
            id={id}
            onClick={() => setShowEditForm(!showEditForm)}
            title="Edit contact"
          >
            {showEditForm ? (
              <img
                src={cancelIcon}
                alt="Cancel icon for close edit form"
                width={16}
              />
            ) : (
              <img src={editIcon} alt="trash icon" width={16} />
            )}
          </button>
          {name}
        </td>
        <td className={css.phone}>{number}</td>
        <td className={css.delete}>
          {' '}
          <div className={css.deleteBtnCont}>
          <button
            type="button"
            className={css.deleteBtn}
            id={id}
            onClick={() => deleteContact(id)}
            title="Delete contact"
          >
            {isDeleting ? (
              <Loader />
            ) : (
              <img src={trashIcon} alt="trash icon" width={16} />
            )}
          </button></div>
        </td>
      </tr>
    </>
  );
};

export default Contact;
