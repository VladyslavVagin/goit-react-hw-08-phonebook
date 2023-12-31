import AddContactForm from '../../components/AddContactForm/AddContactForm';
import Filter from '../../components/Filter/Filter';
import ListOfContacts from '../../components/ListOfContacts/ListOfContacts';
import Loader from '../../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import addIcon from '../../icons/plus.png';
import minusIcon from '../../icons/minus-sign.png';
import searchIcon from '../../icons/search.png';
import cancelIcon from '../../icons/forbidden.png';
import { useState, useEffect } from 'react';
import { useGetContactsQuery } from '../../redux/contacts/contactsAPI';
import css from './Contacts.module.css';

const Contacts = () => {
  const { data, isSuccess, isLoading, isError, refetch } = useGetContactsQuery();
  const [showAddContact, setShowAddContact] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // Get current value of token from localStorage
  const dataTokenStorage = localStorage.getItem('persist:auth');
  const parsedData = JSON.parse(dataTokenStorage);
  const token = JSON.parse(parsedData.token);

// If token will change - we refetch list of contacts
 useEffect(() => {
  refetch();
 }, [refetch, token])

  return (
    <div className="container">
      <div className={css.buttons}>
        <button
          type="button"
          onClick={() => setShowAddContact(!showAddContact)}
          className={css.addContact}
          title='Button for show add contact form'
          aria-label='Button for show or hide add contact form'
        >
          {' '}
          {showAddContact ? (
            <img
              src={minusIcon}
              alt="Icon for hidden add contact form"
              width={20}
            />
          ) : (
            <img src={addIcon} alt="Icon for add button" width={20} />
          )}
        </button>
        {data?.length === 0 ? <h2> No contacts in phonebook</h2> :  <h2>Contacts:</h2>}
        <button
          type="button"
          onClick={() => setShowSearch(!showSearch)}
          className={css.searchShowBtn}
          title='Button for open edit contact form'
          aria-label='Button for show or hide input for search contact'
        >
          {showSearch ?  <img src={cancelIcon} alt="Cancel search icon" width={20} /> :  <img src={searchIcon} alt="Search icon button" width={20} />}
        </button>
      </div>
      {showAddContact && (
        <AddContactForm data={data} setShowAddContact={setShowAddContact} />
      )}
      {showSearch && <Filter />}
      {isLoading && <Loader />}
      {!isLoading && !isError && data.length !== 0 && (
        <ListOfContacts data={data} isSuccess={isSuccess} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        style={{ width: 200, marginLeft: 'auto' }}
      />
    </div>
  );
};

export default Contacts;
