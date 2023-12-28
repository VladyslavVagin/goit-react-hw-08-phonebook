import AddContactForm from "../../components/AddContactForm/AddContactForm"
import Filter from "../../components/Filter/Filter"
import ListOfContacts from "../../components/ListOfContacts/ListOfContacts"
import Loader from "../../components/Loader/Loader"
import { ToastContainer } from 'react-toastify';
import { useGetContactsQuery } from '../../redux/contactsAPI';


const Contacts = () => {
    const { data, isSuccess, isLoading, isError } = useGetContactsQuery();
  return (
    <div className="container">
    <h1>Phonebook</h1>
    <AddContactForm data={data} />
    {isLoading && <Loader />}
    {!isLoading && !isError && data.length !== 0 && <h2>Contacts</h2>}
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