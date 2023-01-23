import { useCrawling } from '@hooks/useCrawling';
import { useGetWeather } from '@hooks/useGetWeather';
import NavBar from '@layouts/NavBar';
import RollingBanner from '@layouts/RollingBanner';
import Diary from '@pages/Diary';
import Home from '@pages/Home';
import LogIn from '@pages/LogIn';
import Request from '@pages/Request';
import Setting from '@pages/Setting';
import SignUp from '@pages/SignUp';
import User from '@pages/User';
import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const App = () => {
  const { indexArray, sayingData } = useCrawling();
  useGetWeather();

  function Layout() {
    return (
      <div>
        <NavBar />
        <RollingBanner indexArray={indexArray} sayingData={sayingData} />
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
          <Route path='/:user' element={<User />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/request' element={<Request />} />
          <Route path='/setting' element={<Setting />} />
        </Route>
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
