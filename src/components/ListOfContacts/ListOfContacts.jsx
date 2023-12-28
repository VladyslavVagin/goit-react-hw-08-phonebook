import css from './ListOfContacts.module.css';
import Contact from '../Contact/Contact';
import { selectQuery } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ListOfContacts = ({data, isSuccess}) => {
  const filter = useSelector(selectQuery);

  const filteredContacts = data?.filter(item => item.name.toLowerCase().includes(filter));

  return (
    <div className={css.tableContainer}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Name</th>
            <th className={css.th}>Phone</th>
            <th className={css.th}>DLT</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {isSuccess && filteredContacts?.map((contact) => {
            return <Contact key={contact.id} contact={contact}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfContacts;
