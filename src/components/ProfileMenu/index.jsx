import { Container, ModalList, Logout } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { SlLogout, SlSettings } from 'react-icons/sl';
import { TfiAgenda } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpenned }) => {
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
    <Container isOpenned={isOpenned}>
      <ModalList>
        <Link to={`/${userName}`}>
          내 프로필
          <BsPersonBoundingBox />
        </Link>
      </ModalList>
      <ModalList>
        <Link to='/diary'>
          다이어리
          <TfiAgenda />
        </Link>
      </ModalList>
      <ModalList>
        <Link to='/setting'>
          설정
          <SlSettings />
        </Link>
      </ModalList>
      <ModalList>
        <Logout onClick={onClickLogout}>
          로그아웃
          <SlLogout />
        </Logout>
      </ModalList>
    </Container>
  ) : (
    <Container isOpenned={isOpenned}>
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
