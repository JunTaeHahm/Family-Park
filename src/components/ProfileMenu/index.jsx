import { Container, ModalList, Logout } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { SlLogout, SlSettings } from 'react-icons/sl';
import { TfiAnnouncement } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpened }) => {
  const navigate = useNavigate();

  const { userName, refetch } = useGetClientUser();

  const onClickLogout = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .get(`/api/logout`)
        .then(() => {
          navigate('/');
          window.location.reload();
          refetch();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [refetch, navigate],
  );

  return userName ? (
    <Container isOpened={isOpened}>
      <ModalList>
        <Link to={`/${userName}`}>내 프로필</Link>
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
