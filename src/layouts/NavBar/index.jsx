import ProfileMenu from '../../components/ProfileMenu';
import { HeaderLogo, Header, NavWrap, LoginWrap } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { TfiHome, TfiAgenda, TfiBookmarkAlt, TfiAnnouncement } from 'react-icons/tfi';
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
        {innerWidth > 768 ? (
          <NavWrap>
            <Link to='/'>
              HOME
              <TfiHome />
            </Link>
            <Link to={`/${userName}`}>
              COLLECTION
              <TfiBookmarkAlt />
            </Link>
            <Link to='/diary'>
              DIARY
              <TfiAgenda />
            </Link>
            <Link to='/request'>
              REQUEST
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
            <Link to={`/${userName}`}>
              <img
                alt={userName}
                src={userAvatar ? userAvatar : './src/assets/images/default.png'}
              />
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
