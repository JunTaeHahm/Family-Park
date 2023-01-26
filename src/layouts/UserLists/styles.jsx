import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const ListWrap = styled.div`
  position: relative;
  border-radius: 1.3rem;
  background-color: var(--white);
  box-shadow: 0.3rem 0.3rem 0.3rem #c6c6c6, -0.3rem -0.3rem 0.3rem #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  width: 9rem;
  max-width: 9rem;
  height: auto;
  max-height: 18rem;
  padding: 1rem;
  &::-webkit-scrollbar {
    width: 0.6rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--darkgray);
    border-radius: 2rem;
  }
  &::-webkit-scrollbar-button:start:decrement,
  &::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 1.5rem;
    background-color: transparent;
  }
`;
export const Title = styled.div`
  font-family: var(--IMB-Li);
  margin: 0.3rem 0 1.3rem;
  text-align: center;
  background-color: var(--black);
  color: var(--white);
  border-radius: 2rem;
  padding: 0.19rem 0.9rem;
`;
export const List = styled.div`
  width: 6.5rem;
  max-width: 6.5rem;
  text-align: left;
  position: relative;
  text-indent: 1.3rem;
  margin: 0 0.6rem;
  padding: 0.5rem 0;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: 0.06rem solid var(--gray);
  }
  &.online:before {
    background-color: var(--blue);
    border: none;
  }
`;

export const Online = styled.span`
  margin-top: 0.9rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  max-width: max-content;
  gap: 0.3rem;
  &:before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: var(--blue);
  }
`;
