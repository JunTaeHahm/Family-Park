import {
  FormRequest,
  Mismatch,
  Input,
  Label,
  Container,
  Form,
  FormTitle,
  HeaderLogo,
  LinkContainer,
  Button,
} from './styles';
import useInput from '@hooks/useInput';
import { useGetClientUser } from '@hooks/userInfo';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [userName, onChangeUserName] = useInput('');
  const [buttonActive, setButtonActive] = useState(false);
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);
  const { isAuth: userLoginStatus } = useGetClientUser();

  useEffect(() => {
    if (userLoginStatus) navigate('/');
    !mismatchError && userName && password ? setButtonActive(true) : setButtonActive(false);
  }, [userLoginStatus, navigate, mismatchError, userName, password]);
  /* 비밀번호 */
  const onChangePassword = useCallback(
    (e) => {
      const trimValue = e.target.value;
      setPassword(trimValue.trim());
      setMismatchError(e.target.value !== passwordCheck);
      // 비밀번호-비밀번호 확인 비교해서 미스매치에 반환
    },
    [passwordCheck, setPassword],
  );

  /* 비밀번호 확인 */
  const onChangePasswordCheck = useCallback(
    (e) => {
      const trimValue = e.target.value;
      setPasswordCheck(trimValue.trim());
      setMismatchError(e.target.value !== password); // 비밀번호-비밀번호 확인 비교해서 미스매치에 반환
    },
    [password, setPasswordCheck],
  );

  /* Submit */
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError && userName && password) {
        axios
          .post(`/api/users`, {
            userName,
            password,
          })
          .then(() => {
            navigate('/login');
            toast.success('회원가입 성공!');
          })
          .catch((error) => {
            if (error.response.data?.exUserMessage) toast.error(error.response.data.exUserMessage);
            if (error.response.data.errors?.userName) toast.error('유저명을 확인해주세요.');
            if (error.response.data.errors?.password) toast.error('비밀번호를 확인해주세요.');
          });
      }
    },
    [password, userName, mismatchError, navigate],
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
        <FormTitle>회원가입</FormTitle>
        <Label htmlFor='username-label'>
          <span>유저명</span>
          <div>
            <Input
              autoFocus
              autoComplete='off'
              type='text'
              name='username'
              id='username-label'
              placeholder='Username'
              value={userName}
              onChange={onChangeUserName}
            />
          </div>
          <FormRequest>유저명은 2자 이상, 5자 이하만 허용됩니다.</FormRequest>
        </Label>
        <Label className='password-wrap' htmlFor='password-label'>
          <span>비밀번호</span>
          <span>비밀번호 확인{mismatchError && <Mismatch>불일치</Mismatch>}</span>
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
          <div>
            <Input
              autoComplete='off'
              type='password'
              name='password-check'
              id='password-check-label'
              placeholder='Repeat Password'
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          <FormRequest>
            비밀번호는 1개 이상의 숫자와 특수문자를 포함해야 합니다.&nbsp;(최소 8자)
          </FormRequest>
        </Label>
        <Button buttonActive={buttonActive} id='Button' type='submit'>
          작성완료
        </Button>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link to='/login'>로그인 &gt;</Link>
        </LinkContainer>
      </Form>
    </Container>
  );
};
export default SignUp;
