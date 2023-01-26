import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: ${(props) => (props.isOpenned ? 'translate(-50%, 0)' : 'translate(-50%, -200%)')};
  width: calc(100% + 0.13rem);
  background-color: var(--black);
  color: var(--white);
  z-index: -1;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0.6rem 0.6rem;
  box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  justify-content: center;
  gap: 0.6rem;
  transition: transform 0.3s;
  cursor: pointer;
`;

export const ModalList = styled.div`
  padding: 0.6rem 0;
  text-align: center;
  width: 100%;
  transition: background-color 0.2s;
  a {
    display: inline-block;
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
    background-color: var(--darkgray);
  }
`;

export const Logout = styled.div``;
