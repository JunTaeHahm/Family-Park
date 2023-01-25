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
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: 5px 5px 5px #c6c6c6, -5px -5px 5px #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 170px;
  min-width: 150px;
  max-height: 50%;
  min-height: 30%;
  overflow-x: hidden;
  width: max-content;
  padding: 15px;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--darkgray);
    border-radius: 30px;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    display: block;
    height: 30px;
    background-color: transparent;
  }
`;
export const Title = styled.h2`
  font-family: var(--IMB-Li);
  margin: 5px 0 20px;
  text-align: center;
  background-color: var(--black);
  color: var(--white);
  border-radius: 30px;
  padding: 3px 15px;
  font-size: 16px;
`;
export const List = styled.div`
  width: 100px;
  max-width: 100px;
  text-align: left;
  position: relative;
  text-indent: 20px;
  margin: 0 10px;
  padding: 8px 0;
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
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid var(--gray);
  }
  &.online:before {
    background-color: var(--blue);
    border: none;
  }
`;

export const Online = styled.span`
  margin-top: 15px;
  font-size: 12px;
  display: flex;
  align-items: center;
  max-width: max-content;
  gap: 5px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--blue);
  }
`;
