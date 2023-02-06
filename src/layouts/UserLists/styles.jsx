import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    & {
      position: fixed;
      transform: ${(props) => (props.userListOpen ? 'translate(0%, 0)' : 'translate(100%, 0)')};
      top: 0;
      left: 0;
      z-index: 10000;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      transform-origin: center center;
      transition: all 0.3s;
    }
  }
`;

export const ListWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  width: 9rem;
  height: auto;
  max-width: 9rem;
  max-height: 50vh;
  padding: 1rem;
  border-radius: 1.3rem;
  background-color: var(--secondary1);
  box-shadow: var(--card-shadow);
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-button:start:decrement,
  &::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 1.5rem;
    background-color: transparent;
  }
  @media screen and (max-width: 767px) {
    & {
      width: max-content;
      height: 60vh;
      max-width: none;
      max-height: 60vh;
      padding: 2rem;
      font-size: 1.2rem;
    }
  }
`;

export const Title = styled.div`
  margin: 0.3rem 0 1.3rem;
  padding: 0.19rem 0.9rem;
  border-radius: 2rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  font-weight: 300;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      padding: 0.3rem 1.3rem;
      background-color: var(--secondary1);
      color: var(--primary1);
      font-weight: normal;
    }
  }
`;

export const List = styled.div`
  position: relative;
  width: 6.5rem;
  max-width: 6.5rem;
  margin: 0 0.6rem;
  padding: 0.5rem 0;
  text-align: left;
  text-indent: 1.3rem;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border: 0.06rem solid var(--primary2);
    border-radius: 50%;
    transform: translate(0, -50%);
  }
  &.online:before {
    border: none;
    background-color: var(--primary2);
  }
`;

export const Online = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  max-width: max-content;
  margin-top: 0.9rem;
  font-size: 0.8rem;
  &:before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--primary2);
  }
  @media screen and (max-width: 767px) {
    & {
      color: var(--secondary1);
    }
  }
`;
