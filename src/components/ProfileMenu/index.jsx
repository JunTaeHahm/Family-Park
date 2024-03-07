import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

import { useAllUsers, useGetClientUser } from '@hooks/userInfo';

import { Container, Logout, ModalList } from './styles';
const ProfileMenu = ({ isOpened }) => {
  const navigate = useNavigate();

  const { userName, kakaoId, refetch: clientRefetch } = useGetClientUser();
  const { refetch: allUserRefetch } = useAllUsers();

  const handleLogout = useCallback(
    (e) => {
      e.preventDefault();
      if (kakaoId) {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.KAKAO_LOGOUT_REDIRECT_URI}`;
      } else {
        axios
          .get(`/api/users/logout`)
          .then(() => {
            clientRefetch();
            allUserRefetch();
            navigate('/');
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    [allUserRefetch, clientRefetch, navigate, kakaoId],
  );

  return (
    userName && (
      <Container isOpened={isOpened}>
        <ModalList>
          <Link to={`/${userName}`}>마이페이지</Link>
        </ModalList>
        <ModalList>
          <Link to='/센텐스유'>공지사항</Link>
        </ModalList>
        <ModalList>
          <Link onClick={() => (window.location = 'mailto:ahuuae_@kakao.com')}>문의하기</Link>
        </ModalList>
        <ModalList>
          <Link to='/setting'>설정</Link>
        </ModalList>
        <ModalList>
          <Logout onClick={handleLogout}>로그아웃</Logout>
        </ModalList>
      </Container>
    )
  );
};

export default ProfileMenu;
