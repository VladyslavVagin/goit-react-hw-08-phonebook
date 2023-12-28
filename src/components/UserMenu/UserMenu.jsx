import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css'

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

  return (
    <div className={css.wrapper}>
        <p className={css.userName}>User: {user.name}</p>
        <button type='button' onClick={() => dispatch(logOut())} className={css.logout}>LogOut</button>
    </div>
  )
}

export default UserMenu