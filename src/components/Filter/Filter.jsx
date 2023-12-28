import css from './Filter.module.css'
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/filterSlice';


const Filter = () => {
const dispatch = useDispatch();

const handleChange = (e) => {
  const searchQuery = e.target.value;
  dispatch(setQuery(searchQuery.toLowerCase()))
}

  return (
    <label>
      <input
        className={css.filter}
        name="filter"
        placeholder="Search..."
        type="search"
        onChange={handleChange}
      />
    </label>
  );
};


export default Filter;
