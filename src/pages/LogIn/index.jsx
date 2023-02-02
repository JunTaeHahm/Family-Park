import {
  LinkContainer,
  HeaderLogo,
  Button,
  Form,
  Label,
  Input,
  FormTitle,
  Container,
} from '../SignUp/styles';
import useInput from '@hooks/useInput';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();

  const [userName, onChangeUserName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [buttonActive, setButtonActive] = useState(false);

  const { isAuth: userLoginStatus } = useGetClientUser();
  useEffect(() => {
    if (userLoginStatus) navigate('/');
    userName && password ? setButtonActive(true) : setButtonActive(false);
  }, [userLoginStatus, navigate, userName, password]);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (userName && password) {
        axios
          .post(
            `/api/users/login`,
            { userName, password },
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
              },
              withCredentials: true,
            },
          )
          .then((res) => {
            navigate('/');
          })
          .catch((error) => {
            console.log(error.response);
            toast.error('유저명 혹은 비밀번호가 틀렸습니다.');
          });
      }
    },
    [userName, password, navigate],
  );

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <HeaderLogo>
          <Link to='/'>
            <img
              src='https://www.sentenceu.co.kr/src/assets/images/logo_empty.png'
              alt='센텐스유 로고'
            />
          </Link>
        </HeaderLogo>
        <FormTitle>로그인</FormTitle>
        <Label htmlFor='userName-label'>
          <span>유저명</span>
          <div>
            <Input
              autoFocus
              autoComplete='off'
              type='userName'
              name='userName'
              id='userName-label'
              placeholder='User Name'
              value={userName}
              onChange={onChangeUserName}
            />
          </div>
        </Label>
        <Label htmlFor='password-label'>
          <span>비밀번호</span>
          <div>
            <Input
              autoComplete='off'
              type='password'
              name='password'
              id='password-label'
              placeholder='Password'
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </Label>
        <Button buttonActive={buttonActive} id='Button' type='submit'>
          로그인
        </Button>
        <LinkContainer>
          아직 회원이 아니신가요?
          <Link to='/signup'>회원가입 &gt;</Link>
        </LinkContainer>
      </Form>
    </Container>
  );
};
export default LogIn;
