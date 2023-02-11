import { Container, ModalList, Logout } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpened }) => {
  const navigate = useNavigate();

  const { userName, kakaoId, refetch } = useGetClientUser();

  /* 로그아웃 함수 */
  const onClickLogout = useCallback(
    (e) => {
      e.preventDefault();
      if (kakaoId) {
        window.location.href = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.KAKAO_LOGOUT_REDIRECT_URI}`;
      } else {
        axios
          .get(`/api/users/logout`)
          .then(() => {
            navigate('/'); // 홈으로 이동
            window.location.reload(); // 새로고침
            refetch(); // 클라이언트 유저정보 리패치
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    [refetch, navigate, kakaoId],
  );

  return (
    userName && (
      <Container isOpened={isOpened}>
        <ModalList>
          <Link to={`/${userName}`}>내 프로필</Link>
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
          <Logout onClick={onClickLogout}>로그아웃</Logout>
        </ModalList>
      </Container>
    )
  );
};

export default ProfileMenu;
