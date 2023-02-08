import loadable from '@loadable/component';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const User = loadable(() => import('@pages/User'));
const Home = loadable(() => import('@pages/Home'));
const LogIn = loadable(() => import('@pages/LogIn'));
const Admin = loadable(() => import('@pages/Admin'));
const Posts = loadable(() => import('@pages/Posts'));
const SignUp = loadable(() => import('@pages/SignUp'));
const NavBar = loadable(() => import('@layouts/NavBar'));
const Setting = loadable(() => import('@pages/Setting'));
const RollingBanner = loadable(() => import('@layouts/RollingBanner'));

const App = () => {
  function Layout() {
    return (
      <>
        <NavBar />
        <RollingBanner />
        <Outlet />
      </>
    );
  }
  return (
    <div id='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/:user' element={<User />} />
          <Route path='/센텐스유' element={<Admin />} />
          <Route path='/setting' element={<Setting />} />
        </Route>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
