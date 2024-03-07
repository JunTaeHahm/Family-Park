import styled from '@emotion/styled';

export const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  width: 10rem;
  border-radius: 0.5rem;
  color: var(--primary-white);
  background-color: var(--primary-black);
  box-shadow: var(--card);
  cursor: pointer;
  transform: ${(props) =>
    props.isOpened ? 'translate(-70%, 5%) scale(1)' : 'translate(-70%, 5%) scale(0)'};
  transform-origin: top right;
  transition: all 0.2s;
  & span {
    color: var(--primary-white);
  }
`;

export const ModalList = styled.li`
  width: 100%;
  text-align: center;
  transition: background-color 0.2s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0.5rem 0;
    color: var(--primary-white);
  }
  &:first-of-type {
    margin-top: 1.2rem;
  }
  &:last-of-type {
    margin-bottom: 1.2rem;
  }
  &:hover {
    color: var(--primary-black);
    background-color: var(--primary-skyblue);
    a {
      color: var(--primary-black);
    }
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  svg {
    transform: rotate(180deg);
    transform-origin: center center;
  }
`;
