import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import logoImage from '../../icons/notepad-117597.svg';
import exitIcon from '../../icons/logout.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, isLoading } = useAuth();

  return (
    <>
    <div className={css.userMenu}>
      <div className={css.wrapper}>
      <h1>Phonebook
          <img src={logoImage} alt='Icon with notebook' width={60}/>
        </h1>
        <p className={css.userName}>User: {user.name}</p>
        <button
          type="button"
          onClick={() => dispatch(logOut())}
          className={css.logout}
        >
          {isLoading ? <Loader/> : <img src={exitIcon} alt='Icon for logout button' width={24}/>}
        </button>
      </div>
    </div>
    {location.pathname !== '/contacts' && (
      <div className={css.linkWrapper}>
      <NavLink to={'/contacts'} className={css.NavLink}>
        List of contacts
      </NavLink></div>
    )}</>
  );
};

export default UserMenu;
