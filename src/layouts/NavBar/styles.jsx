import styled from '@emotion/styled';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  font-size: 0.9rem;
  background-color: var(--background);
`;
export const NavWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 1300px;
  height: 100%;
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
  cursor: pointer;
  transform: translate(0, 0.2rem);
`;
export const WriteButtonBack = styled.span`
  display: inline-block;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--primary-black);
`;

export const WriteButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.4rem 1.2rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 0.9rem;
  color: var(--primary-black);
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  cursor: pointer;
  a {
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
  transform: translate(0, 0.2rem);
`;

export const LoginButton = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.4rem 1.2rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  font-weight: bold;
  color: var(--primary-black);
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translate(0, -0.2rem);
  transition: transform 0.1s ease;
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
