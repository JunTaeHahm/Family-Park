import styled from '@emotion/styled';

export const Header = styled.nav`
  font-family: var(--Mont-Rg);
  font-size: 0.9rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 0.06rem solid var(--black);
  z-index: 100;
  background-color: var(--background);
`;

export const HeaderLogo = styled.h1`
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
    background-color: var(--black);
    color: var(--white);
    padding: 0.3rem 0.6rem;
    transition: all 0.2s;
    &:hover {
      background-color: var(--gray);
      color: var(--black);
    }
  }
`;

export const LoginWrap = styled.div`
  border-left: 0.06rem solid var(--black);
  position: relative;
  width: 10rem;
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
    gap: 1rem;
    img {
      border: 0.06rem solid var(--white);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &:hover {
    background-color: var(--gray);
    color: var(--black);
  }
  @media screen and (max-width: 768px) {
    & {
      width: max-content;
      padding: 0 1rem;
    }
  }
`;
