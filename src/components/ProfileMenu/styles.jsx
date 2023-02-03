import styled from '@emotion/styled';

export const Container = styled.ul`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: ${(props) => (props.isOpened ? 'translate(-50%, 0)' : 'translate(-50%, -200%)')};
  width: calc(100% + 0.13rem);
  background-color: var(--primary1);
  color: var(--secondary1);
  z-index: -1;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0.6rem 0.6rem;
  box-shadow: var(--card-shadow);
  justify-content: center;
  gap: 0.6rem;
  transition: all 0.3s;
  cursor: pointer;
`;

export const ModalList = styled.li`
  padding: 0.6rem 0;
  text-align: center;
  width: 100%;
  transition: background-color 0.2s;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
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
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  svg {
    transform-origin: center center;
    transform: rotate(180deg);
  }
`;
