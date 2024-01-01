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
  const [changeContact, { isLoading: isChanging }] = useChangeContactMutation();
  const contactExistName = data.some(
    cont =>
      (cont.name === newName) & (cont.id !== id) ||
      (cont.number === newNumber) & (cont.id !== id)
  );

  const handleEditContact = () => {
    // So, because I put two different input in table for showing edit form near choosen contact - 
    // all patterns in tag input no work.We can't submit two different input that are locate in different columns of table.
    //  That's why we check these patterns in this function. 
    // Also if user don't like change number and/or name , old value remain.

    setShowEditForm(false);
    let patternNumber = /[0-9]{0,3}-?[0-9]{3}-?[0-9]{3}-?[0-9]{4}/;
    let patternName = /^.{0,24}$/;

    if (!contactExistName && (patternNumber.test(newNumber) || number) && patternName.test(newName)) {
      changeContact({
        id,
        name: newName,
        number: newNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4'),
      });
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
            aria-label="Button for show or hide edit contact form"
            style={{marginLeft: '10px'}}
          >
            {showEditForm ? (
              <img
                src={cancelIcon}
                alt="Cancel icon for close edit form"
                width={16}
              />
            ) : (
              <img
                src={editIcon}
                alt="trash icon for delete button"
                width={16}
              />
            )}
          </button>
          {isChanging ? <Loader /> : `${name}`}
        </td>
        <td className={css.phone}> {isChanging ? <Loader /> : `${number}`}</td>
        <td className={css.delete}>
          {' '}
          <div className={css.deleteBtnCont}>
            <button
              type="button"
              className={css.deleteBtn}
              id={id}
              onClick={() => deleteContact(id)}
              title="Delete contact"
              aria-label="Button for delete contact from list of contact"
            >
              {isDeleting ? (
                <Loader />
              ) : (
                <img src={trashIcon} alt="trash icon" width={16} />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Contact;
