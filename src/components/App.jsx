import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import { lazy, Suspense } from "react";
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Signup = lazy(() => import('pages/Signup/Signup'));
const Login = lazy(() => import('pages/Login/Login'));
const Navigation = lazy(() => import('pages/Navigation/Navigation'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  return (
    <>
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/signup' element={<RestrictedRoute redirectTo='/contacts' component={<Signup/>}/>} />
        <Route path='/login' element={<RestrictedRoute redirectTo='/contacts' component={<Login/>}/>} />
        <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts/>}/>} />
      </Route>
      <Route path='*' element={<Navigation />}/>
    </Routes>
    </Suspense>
</>   
  );
};
