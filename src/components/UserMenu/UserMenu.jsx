import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user } = useAuth();

  return (
    <>
    <div className={css.userMenu}>
      <div className={css.wrapper}>
        <p className={css.userName}>User: {user.name}</p>
        <button
          type="button"
          onClick={() => dispatch(logOut())}
          className={css.logout}
        >
          LogOut
        </button>
      </div>
    </div>
    <div className={css.wrapperLink}>
    {location.pathname !== '/contacts' && (
      <NavLink to={'/contacts'} className={css.NavLink}>
        List of contacts
      </NavLink>
    )}
  </div></>
  );
};

export default UserMenu;
