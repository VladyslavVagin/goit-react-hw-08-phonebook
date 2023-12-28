import { Routes, Route } from 'react-router-dom';
import Loader from './Loader/Loader';
import { lazy, Suspense } from "react";

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
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/contacts' element={<Contacts />} />
      </Route>
    </Routes>
    </Suspense>
</>   
  );
};
