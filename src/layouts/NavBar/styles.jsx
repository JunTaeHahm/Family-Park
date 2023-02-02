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
    width: 10rem;
    height: 100%;
    vertical-align: middle;
    object-fit: scale-down;
  }
`;

export const ActionButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin-right: 0.5rem;
  width: 2.3rem;
  height: 2.3rem;
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
      min-width: 8rem;
      width: max-content;
      padding: 0 1.5rem;
    }
  }
`;
