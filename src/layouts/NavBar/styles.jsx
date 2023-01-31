import styled from '@emotion/styled';

export const Header = styled.nav`
  font-size: 0.9rem;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 1920px;
  height: 3rem;
  z-index: 100;
  background-color: var(--secondary2);
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
    width: 12rem;
    height: 100%;
    vertical-align: middle;
    object-fit: scale-down;
  }
`;
export const NavWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  align-items: center;
  gap: 6rem;
  & > a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.3rem;
    background-color: var(--primary1);
    color: var(--secondary1);
    padding: 0.3rem 0.6rem;
    transition: all 0.2s;
    &:hover {
      background-color: var(--primary2);
      color: var(--primary1);
    }
  }
`;

export const ThemeButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin-right: 0.8rem;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--primary2);
    border-radius: 50%;
  }
`;

export const LoginWrap = styled.div`
  border-left: 0.06rem solid var(--primary1);
  border-right: 0.06rem solid var(--primary1);
  position: relative;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--primary1);
  color: var(--secondary1);
  transition: all 0.3s;
  cursor: pointer;
  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      border: 0.06rem solid var(--secondary1);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
  @media screen and (max-width: 768px) {
    & {
      width: max-content;
      padding: 0 1rem;
    }
  }
`;
