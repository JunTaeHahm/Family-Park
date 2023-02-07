import loadable from '@loadable/component';
import Admin from '@pages/Admin';
import Posts from '@pages/Posts';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const RollingBanner = loadable(() => import('@layouts/RollingBanner'));
const Home = loadable(() => import('@pages/Home'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const NavBar = loadable(() => import('@layouts/NavBar'));
const Setting = loadable(() => import('@pages/Setting'));
const User = loadable(() => import('@pages/User'));

const App = () => {
  function Layout() {
    return (
      <div style={{ height: '100%' }}>
        <NavBar />
        <RollingBanner />
        <Outlet />
      </div>
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
