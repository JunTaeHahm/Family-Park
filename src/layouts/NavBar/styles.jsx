import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: var(--background);
  font-size: 0.9rem;
`;
export const NavWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: 1300px;
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

export const WriteWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 0.2rem);
  cursor: pointer;
`;
export const WriteButtonBack = styled.span`
  display: inline-block;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--primary-black);
`;

export const WriteButton = styled.button`
  font-size: 0.9rem;
  display: inline-block;
  box-sizing: border-box;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  padding: 0.4rem 1.2rem;
  background-color: var(--primary-white);
  color: var(--primary-black);
  font-weight: bold;
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const AlertWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 0.2rem);
  cursor: pointer;
  margin-right: 1rem;
  a {
    transform: translate(0, -0.2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    height: 100%;
    img {
      width: 2rem;
      height: 2rem;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const LoginButtonBack = styled.span`
  display: inline-block;
  align-self: flex-end;
  border-radius: 0.5rem;
  background: var(--primary-black);
`;

export const LoginButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  padding: 0.4rem 1.2rem;
  background-color: var(--primary-white);
  color: var(--primary-black);
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  font-weight: bold;
  cursor: pointer;
  input {
    display: none;
  }
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
  }
`;
