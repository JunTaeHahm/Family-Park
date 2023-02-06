import styled from '@emotion/styled';

export const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.6rem;
  width: calc(100% + 0.13rem);
  border-radius: 0 0 0.6rem 0.6rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  cursor: pointer;
  box-shadow: var(--card-shadow);
  transform: ${(props) => (props.isOpened ? 'translate(-50%, 0)' : 'translate(-50%, -200%)')};
  transition: all 0.3s;
`;

export const ModalList = styled.li`
  width: 100%;
  padding: 0.6rem 0;
  text-align: center;
  transition: background-color 0.2s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    width: 100%;
    height: 100%;
  }
  &:first-of-type {
    margin-top: 0.9rem;
  }
  &:last-of-type {
    margin-bottom: 0.9rem;
  }
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;

export const Logout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  svg {
    transform: rotate(180deg);
    transform-origin: center center;
  }
`;
