import ProfileMenu from '../../components/ProfileMenu';
import { HeaderLogo, Header, ThemeButton, NavWrap, LoginWrap } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillSunFill } from 'react-icons/bs';
import { TfiAgenda, TfiBookmarkAlt, TfiAnnouncement } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { userName, userAvatar } = useGetClientUser();

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, []);

  const onMouseOverProfile = () => {
    setProfileMenuOpen(true);
  };

  const onMouseOutProfile = () => {
    setProfileMenuOpen(false);
  };

  const onTouchStartProfile = () => {
    setProfileMenuOpen(true);
  };

  return (
    <>
      <Header>
        <HeaderLogo>
          <Link to='/'>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Link>
        </HeaderLogo>
        <ThemeButton>
          <BsFillSunFill />
        </ThemeButton>
        {innerWidth > 768 ? (
          <NavWrap>
            <Link to={`/${userName}`}>
              내 컬렉션
              <TfiBookmarkAlt />
            </Link>
            <Link to='/diary'>
              다이어리
              <TfiAgenda />
            </Link>
            <Link to='/request'>
              문의
              <TfiAnnouncement />
            </Link>
          </NavWrap>
        ) : (
          ''
        )}
        <LoginWrap
          onTouchStart={onTouchStartProfile}
          onMouseOver={onMouseOverProfile}
          onMouseOut={onMouseOutProfile}>
          {!userName ? (
            innerWidth > 360 ? (
              <>Let&apos;s get started.</>
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
              isOpenned={profileMenuOpen}
              onMouseOver={onMouseOverProfile}
              onMouseOut={onMouseOutProfile}
            />
          ) : (
            <ProfileMenu
              isOpenned={profileMenuOpen}
              onMouseOver={onMouseOverProfile}
              onMouseOut={onMouseOutProfile}
            />
          )}
        </LoginWrap>
      </Header>
    </>
  );
};

export default NavBar;
