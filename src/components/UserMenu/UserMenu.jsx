import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div className={css.wrapper}>
        <p className={css.userName}>User: {user.name}</p>
        <NavLink to={'/contacts'} className={css.NavLink}>Contacts</NavLink>
        <button type='button' onClick={() => dispatch(logOut())} className={css.logout}>LogOut</button>
    </div>
  )
}

export default UserMenu