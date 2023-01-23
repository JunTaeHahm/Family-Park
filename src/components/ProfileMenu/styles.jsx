import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: ${(props) => (props.isOpenned ? 'translate(-50%, 0)' : 'translate(-50%, -200%)')};
  width: calc(100% + 2px);
  letter-spacing: -0.5px;
  background-color: var(--black);
  color: var(--white);
  z-index: -1;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s;
  cursor: pointer;
`;

export const ModalList = styled.div`
  padding: 10px 0;
  text-align: center;
  width: 100%;
  transition: background-color 0.2s;
  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &:first-of-type {
    margin-top: 15px;
  }
  &:last-of-type {
    margin-bottom: 15px;
  }
  &:hover {
    background-color: var(--darkgray);
  }
`;

export const Logout = styled.div`
`;
