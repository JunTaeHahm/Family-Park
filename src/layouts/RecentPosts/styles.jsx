import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 5rem;
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
  background-color: var(--secondary2);
  font-family: var(--IMB-Md);
  width: 100%;
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const PostWrap = styled.div`
  width: 100%;
  padding-top: 4rem;
  height: calc(100vh - 7rem);
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & {
      padding-top: 0;
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
  background-color: var(--secondary2);
  button {
    font-family: var(--IMB-Li);
    font-size: 0.9rem;
    height: 2rem;
    line-height: 1.8rem;
    padding: 0 1rem;
    z-index: 2;
    border-radius: 3rem;
    position: relative;
    background: var(--primary1);
    color: var(--secondary1);
    outline: none;
  }
`;
