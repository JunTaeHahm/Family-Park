import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  left: 50%;
  z-index: 100;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 3rem;
  max-width: 1300px;
  background-color: var(--background);
  font-size: 0.9rem;
  transform: translate(-50%, 0);
`;

export const HeaderLogo = styled.h1`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1.5rem;
  img {
    width: 10rem;
    height: 100%;
    object-fit: scale-down;
    vertical-align: middle;
  }
`;

export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.8rem;
  background-color: transparent;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  &:hover {
    border-radius: 50%;
    background-color: var(--primary-skyblue);
  }
`;

export const LightMode = styled.div``;
export const DarkMode = styled.div``;

export const LoginWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 100%;
  border-right: 0.06rem solid var(--primary-black);
  border-left: 0.06rem solid var(--primary-black);
  background-color: var(--primary-black);
  color: var(--primary-white);
  cursor: pointer;
  transition: all 0.3s;
  span {
    color: var(--primary-white);
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
    img {
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  &:hover {
    background-color: var(--primary-skyblue);
    color: var(--primary-black);
    span {
      color: var(--primary-black);
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: max-content;
      min-width: 8rem;
      padding: 0 1.5rem;
    }
  }
`;
