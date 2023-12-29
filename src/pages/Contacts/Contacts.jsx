import AddContactForm from "../../components/AddContactForm/AddContactForm"
import Filter from "../../components/Filter/Filter"
import ListOfContacts from "../../components/ListOfContacts/ListOfContacts"
import Loader from "../../components/Loader/Loader"
import { ToastContainer } from 'react-toastify';
import addIcon from '../../icons/plus.png';
import { useState } from 'react';
import { useGetContactsQuery } from '../../redux/contacts/contactsAPI';
import css from './Contacts.module.css';


const Contacts = () => {
    const { data, isSuccess, isLoading, isError } = useGetContactsQuery();
    const [showAddContact, setShowAddContact] = useState(false);

    
  return (
    <div className="container">
      <button type="button" onClick={() => setShowAddContact(!showAddContact)} className={css.addContact}>
        {!showAddContact ? <div className={css.addContent}><img src={addIcon} alt="Icon for add button" width={20}/>Add contact</div> : 'Cancel'}
      </button>
    {showAddContact && <AddContactForm data={data} setShowAddContact={setShowAddContact}/>}
    {isLoading && <Loader />}
    {!isLoading && !isError && data.length !== 0 && <Filter />}
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
      style={{width: 200, marginLeft: 'auto'}}
    />
  </div>
  )
}

export default Contacts