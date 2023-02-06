import { Container, ModalList, Logout } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpened }) => {
  const navigate = useNavigate();

  const { userName, refetch } = useGetClientUser();

  /* 로그아웃 함수 */
  const onClickLogout = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .get(`/api/logout`)
        .then(() => {
          navigate('/'); // 홈으로 이동
          window.location.reload(); // 새로고침
          refetch(); // 클라이언트 유저정보 리패치
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [refetch, navigate],
  );

  return userName ? ( // 로그인 상태에 따라 보이는 메뉴 다르도록
    <Container isOpened={isOpened}>
      <ModalList>
        <Link to={`/${userName}`}>프로필</Link>
      </ModalList>
      <ModalList>
        <Link to='/setting'>설정</Link>
      </ModalList>
      <ModalList>
        <Link to='/센텐스유'>공지사항</Link>
      </ModalList>
      <ModalList>
        <Logout onClick={onClickLogout}>로그아웃</Logout>
      </ModalList>
    </Container>
  ) : (
    <Container isOpened={isOpened}>
      <ModalList>
        <Link to={'/login'}>로그인</Link>
      </ModalList>
      <ModalList>
        <Link to={'/signup'}>회원가입</Link>
      </ModalList>
    </Container>
  );
};

export default ProfileMenu;
