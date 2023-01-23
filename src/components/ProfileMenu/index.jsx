import { Container, ModalList, Logout } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const ProfileMenu = ({ isOpenned }) => {
  const navigate = useNavigate();

  const { userName } = useGetClientUser();

  const onClickLogout = useCallback(
    (e) => {
      e.preventDefault();
      axios
        .get('/api/logout')
        .then((res) => {
          navigate('/');
          window.location.reload();
          toast.success('로그아웃 완료');
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [navigate],
  );

  return userName ? (
    <Container isOpenned={isOpenned}>
      <ModalList>
        <Link to={`/${userName}`}>Profile</Link>
      </ModalList>
      <ModalList>
        <Link to='/setting'>Notification</Link>
      </ModalList>
      <ModalList>
        <Link to='/setting'>Setting</Link>
      </ModalList>
      <ModalList>
        <Logout onClick={onClickLogout}>Logout</Logout>
      </ModalList>
    </Container>
  ) : (
    <Container isOpenned={isOpenned}>
      <ModalList>
        <Link to={'/login'}>Login</Link>
      </ModalList>
      <ModalList>
        <Link to={'/signup'}>Sign up</Link>
      </ModalList>
    </Container>
  );
};

export default ProfileMenu;
