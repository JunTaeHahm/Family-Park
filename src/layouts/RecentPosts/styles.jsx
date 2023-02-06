import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  padding: 1.5rem 1rem 1rem;
  background-color: var(--secondary2);
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
`;

export const PostWrap = styled.div`
  overflow-x: scroll;
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 4rem;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 767px) {
    & {
      overflow: visible;
      padding-top: 0;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 30vh;
`;

export const DateSection = styled.section``;

export const DateHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: var(--secondary2);
  button {
    position: relative;
    z-index: 2;
    height: 2rem;
    padding: 0 1rem;
    outline: none;
    border-radius: 3rem;
    background: var(--primary1);
    color: var(--secondary1);
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.8rem;
  }
`;
