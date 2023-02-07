import ProfileMenu from '../../components/ProfileMenu';
import { HeaderLogo, LightMode, DarkMode, Container, ThemeButton, LoginWrap } from './styles';
import { useViewPort } from '@hooks/useViewPort';
import { useGetClientUser } from '@hooks/userInfo';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userName, userAvatar } = useGetClientUser();
  const { innerWidth } = useViewPort();

  const [lightMode, setLightMode] = useState(true);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  /* 프로필 메뉴 마우스 호버 시 열림 */
  const onMouseOverProfile = () => {
    setProfileMenuOpen(true);
  };

  /* 프로필 메뉴 마우스 아웃 시 닫힘 */
  const onMouseOutProfile = () => {
    setProfileMenuOpen(false);
  };

  /* 프로필 메뉴 터치 시 열림(모바일, 태블릿) */
  const onTouchStartProfile = () => {
    setProfileMenuOpen(true);
  };

  /* 테마 변경 버튼 클릭 시 */
  const onThemeChange = () => {
    setLightMode((prev) => !prev);
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to='/'>
          <img
            src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
            alt='센텐스유 로고'
          />
        </Link>
      </HeaderLogo>

      <ThemeButton onClick={onThemeChange}>
        {lightMode ? (
          <LightMode>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='#222222'>
              <path d='M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z'></path>
            </svg>
          </LightMode>
        ) : (
          <DarkMode>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='#222222'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M20.6144 14.6145C19.787 14.8653 18.9093 15.0001 18 15.0001C13.0294 15.0001 9 10.9707 9 6.00013C9 5.09088 9.13484 4.21311 9.3856 3.38574C5.69007 4.50583 3 7.93883 3 12.0001C3 16.9707 7.02944 21.0001 12 21.0001C16.0613 21.0001 19.4943 18.3101 20.6144 14.6145Z'
                fill='#222222'></path>
            </svg>
          </DarkMode>
        )}
      </ThemeButton>

      <LoginWrap
        onTouchStart={onTouchStartProfile}
        onMouseOver={onMouseOverProfile}
        onMouseOut={onMouseOutProfile}>
        {/* 로그인 상태에 따라 보이는 메뉴 다르도록 */}
        {!userName ? (
          innerWidth > 360 ? (
            <>Let&apos;s get started</>
          ) : (
            <>
              <AiOutlineMenu />
              &nbsp;&nbsp;MENU
            </>
          )
        ) : (
          <Link>
            <img alt={userName} src={userAvatar} />
            <span>{userName}</span>
          </Link>
        )}

        {userName && userAvatar ? (
          <ProfileMenu
            isOpened={profileMenuOpen}
            onMouseOver={onMouseOverProfile}
            onMouseOut={onMouseOutProfile}
          />
        ) : (
          <ProfileMenu
            isOpened={profileMenuOpen}
            onMouseOver={onMouseOverProfile}
            onMouseOut={onMouseOutProfile}
          />
        )}
      </LoginWrap>
    </Container>
  );
};

export default NavBar;
