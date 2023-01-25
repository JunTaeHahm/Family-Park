import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 70px;
  font-family: var(--IMB-Md);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  text-align: center;
  font-size: 20px;
  height: 50px;
  padding-top: 1rem;
  background-color: var(--background);
  width: 100%;
`;

export const PostWrap = styled.div`
  width: 100%;
  padding-top: 50px;
  height: calc(100vh - 140px);
  max-height: calc(100vh - 140px);
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & {
      height: calc(100vh - 80px);
      max-height: none;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      height: max-content;
      overflow: visible;
    }
  }
`;
export const Loading = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 375px) {
    & {
      display: none;
    }
  }
`;
export const DateSection = styled.section``;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  height: 50px;
  top: 0;
  z-index: 10;
  background-color: var(--background);
  button {
    font-family: var(--IMB-Li);
    font-size: 14px;
    height: 30px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    border-radius: 50px;
    position: relative;
    background: var(--darkgray);
    color: var(--white);
    outline: none;
  }
`;
