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
  width: 24rem;
  max-width: 24rem;
  margin: 0 auto;
`;

export const HeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-bottom: 2rem;
  img {
    width: 15rem;
    height: 100%;
    object-fit: scale-down;
    vertical-align: middle;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: normal;
  text-align: center;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1.3rem;
  color: var(--primary-skyblue);
  font-size: 0.9rem;
  & span {
    color: var(--primary-black);
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
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-bottom: 0.06rem solid black;
  }
  &::placeholder {
    opacity: 0.5;
    height: 100%;
    color: var(--primary-skyblue);
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

export const Button = styled.button`
  width: 100%;
  height: 4rem;
  margin: 0.6rem 0 1.3rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.buttonActive ? 'var(--primary-black)' : 'var(--primary-grey)'};
  color: #fff;
  cursor: pointer;
  box-shadow: var(--card);
  user-select: none;
`;

export const LinkContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 0 auto 0.5rem;
  color: var(--primary-black);
  font-size: 0.8rem;
  a {
    margin-left: 0.6rem;
    color: var(--primary-black);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const KakaoLogin = styled.button`
  width: 183px;
  height: 45px;
  cursor: pointer;
  background: url('https://www.sentenceu.co.kr/src/assets/images/kakao_login_medium_narrow.png');
`;
