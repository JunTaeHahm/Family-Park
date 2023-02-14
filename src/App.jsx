import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import loadable from '@loadable/component';
import PWAPrompt from 'react-ios-pwa-prompt';

import InstallAppButton from '@components/InstallAppButton';

const User = loadable(() => import('@pages/User'));
const Home = loadable(() => import('@pages/Home'));
const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Admin = loadable(() => import('@pages/Admin'));
const Posts = loadable(() => import('@pages/Posts'));
const Setting = loadable(() => import('@pages/Setting'));
const NavBar = loadable(() => import('@layouts/NavBar'));
const RollingBanner = loadable(() => import('@layouts/RollingBanner'));

const userAgent = navigator.userAgent.toLowerCase(); // userAgent 값 (디바이스)

const App = () => {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    if (hasRendered) return;

    const currentSession = sessionStorage.getItem('hasRendered');
    if (!currentSession) {
      sessionStorage.setItem('hasRendered', true);
      setHasRendered(true);
    }
  }, []);

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
      {(userAgent.indexOf('iphone') > -1 || userAgent.indexOf('ipad') > -1) && hasRendered && (
        <PWAPrompt
          copyTitle={'홈 화면에 추가'}
          copyBody={
            '이 웹사이트는 앱 기능이 있습니다. 홈 화면에 추가하여 전체 화면에서 오프라인 상태에서도 사용할 수 있습니다.'
          }
          copyShareButtonLabel={"1) '공유' 버튼을 누르세요."}
          copyAddHomeButtonLabel={"2) '홈 화면에 추가'를 누릅니다"}
          copyClosePrompt={'확인'}
          permanentlyHideOnDismiss={false}
        />
      )}
      {userAgent.indexOf('android') > -1 && hasRendered && <InstallAppButton />}
    </div>
  );
};

export default App;
