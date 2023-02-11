import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 25rem;
  margin: 0 auto;
  @media screen and (max-width: 1023px) {
    & {
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-bottom: 2rem;
  width: 100%;
  img {
    width: 15rem;
    height: 100%;
    object-fit: scale-down;
    vertical-align: middle;
  }
`;

export const FormTitle = styled.h2`
  width: 100%;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  margin-bottom: 1.3rem;
  font-size: 0.9rem;
  & span {
    font-weight: normal;
  }
  &.password-wrap {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    span {
      display: block;
      width: 48%;
    }
    div {
      width: 48%;
    }
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 3rem;
  margin-top: 0.3rem;
  padding: 0.8rem;
  border: none;
  background-color: var(--primary-white);
  font-size: 0.9rem;
  font-weight: 300;
  transition: all 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    height: 100%;
    color: var(--primary-grey);
    font-size: 0.9rem;
  }
`;

export const FormRequest = styled.p`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`;

export const Mismatch = styled.span`
  position: absolute;
  top: 0;
  color: var(--prism-code-3) !important;
  text-align: right;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 767px) {
    & {
      flex-direction: column;
    }
  }
`;

export const Login = styled.button`
  width: 183px;
  height: 45px;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: var(--primary-black);
  color: var(--primary-white);
  font-weight: 300;
  cursor: pointer;
  user-select: none;
`;

export const KakaoLogin = styled.button`
  position: relative;
  width: 183px;
  height: 45px;
  cursor: pointer;
  background: url('https://www.sentenceu.co.kr/src/assets/images/kakao_login_large_narrow.png');
  background-size: cover;
  border-radius: 6px;
`;
