import styled from '@emotion/styled';

export const Header = styled.nav`
  font-family: var(--Mont-Rg);
  font-size: 14px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid var(--black);
  z-index: 100;
  background-color: var(--background);
  @media screen and (max-width: 768px) {
    & {
      height: 50px;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      height: 40px;
    }
  }
`;

export const HeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: var(--Mont-Bd);
  text-align: center;
  font-size: 24px;
  padding: 0 1.5rem;
  @media screen and (max-width: 375px) {
    & {
      font-size: 16px;
    }
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
    background-color: var(--black);
    color: var(--white);
    padding: 0.3rem 0.6rem;
    transition: all 0.2s;
    &:hover {
      background-color: var(--gray);
      color: var(--black);
    }
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const LoginWrap = styled.div`
  border-left: 1px solid var(--black);
  position: relative;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: var(--black);
  color: var(--white);
  transition: all 0.3s;
  cursor: pointer;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border: 1px solid var(--white);
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      margin-left: 1rem;
    }
    span {
      display: inline-block;
      margin: 0 1.2rem;
    }
    &.user-wrap {
      position: relative;
    }
  }
  &:hover {
    background-color: var(--gray);
    color: var(--black);
  }
  @media screen and (max-width: 768px) {
    & {
      padding: 0 0.5rem;
      img {
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
      }
    }
  }
`;
