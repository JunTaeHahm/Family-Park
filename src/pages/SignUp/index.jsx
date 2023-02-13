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
  KakaoLogin,
  ButtonWrap,
  Login,
} from '../LogIn/styles';
import useInput from '@hooks/useInput';
import { useGetClientUser } from '@hooks/userInfo';
import { sweetAlert } from '@utils/sweetAlert';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const { isAuth: userLoginStatus } = useGetClientUser();

  const [userName, onChangeUserName] = useInput('');
  const [password, , setPassword] = useInput('');
  const [passwordCheck, , setPasswordCheck] = useInput('');
  const [mismatchError, setMismatchError] = useState(false);

  useEffect(() => {
    if (userLoginStatus) navigate('/'); // 로그인상태라면 홈으로 navigate
  }, [userLoginStatus, navigate]);

  /* 비밀번호 입력 */
  const onChangePassword = useCallback(
    (e) => {
      const trimValue = e.target.value;

      setPassword(trimValue.trim()); // 띄어쓰기 없이 설정
      setMismatchError(e.target.value !== passwordCheck); // 비밀번호-비밀번호 확인 비교해서 mismatch에 boolean반환
    },
    [passwordCheck, setPassword],
  );

  /* 비밀번호 확인 */
  const onChangePasswordCheck = useCallback(
    (e) => {
      const trimValue = e.target.value;

      setPasswordCheck(trimValue.trim());
      // 비밀번호-비밀번호 확인 비교해서 mismatchError에 리턴:
      setMismatchError(e.target.value !== password);
    },
    [password, setPasswordCheck],
  );

  /* 회원가입 Submit */
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
            navigate('/login'); // 회원가입 성공 시 login페이지로 navigate
            sweetAlert('success', '가입 성공');
          })
          .catch((error) => {
            // 이미 있는 유저명일 경우:
            sweetAlert('warning', error.response.data.exUserName);
            // 비밀번호 조건 미준수:
            if (error.response.data.errors.password) {
              sweetAlert('warning', '비밀번호 조건을 확인해주세요.');
            }
          });
      }
    },
    [password, userName, mismatchError, navigate],
  );

  /* 카카오 로그인 */
  const onKaKaoLogin = useCallback((e) => {
    e.preventDefault();

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.KAKAO_LOGIN_REDIRECT_URI}&response_type=code`;
  }, []);

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
        </Label>
        <Label className='password-wrap' htmlFor='password-label'>
          <span>비밀번호</span>
          <span>
            비밀번호 확인
            {mismatchError && <Mismatch>불일치</Mismatch>}
          </span>
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

        <ButtonWrap>
          <Login id='Button' type='submit'>
            작성완료
          </Login>
          <KakaoLogin onClick={onKaKaoLogin} />
        </ButtonWrap>

        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link to='/login'>로그인 &gt;</Link>
        </LinkContainer>
      </Form>
    </Container>
  );
};
export default SignUp;
