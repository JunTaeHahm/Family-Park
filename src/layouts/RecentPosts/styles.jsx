import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 5rem;
  font-family: var(--IMB-Md);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  text-align: center;
  font-size: 1.3rem;
  padding: 1.5rem 1rem 1rem;
  background-color: var(--background);
  width: 100%;
`;

export const PostWrap = styled.div`
  width: 100%;
  padding-top: 4rem;
  height: calc(100vh - 7rem);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
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
`;
export const DateSection = styled.section``;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  height: 3rem;
  top: 0;
  z-index: 10;
  background-color: var(--background);
  button {
    font-family: var(--IMB-Li);
    font-size: 0.9rem;
    height: 2rem;
    line-height: 1.8rem;
    padding: 0 1rem;
    z-index: 2;
    border-radius: 3rem;
    position: relative;
    background: var(--darkgray);
    color: var(--white);
    outline: none;
  }
`;
