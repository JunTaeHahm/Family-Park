import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PostWrap = styled.div`
  width: 100%;
  background-color: var(--background);
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: var(--background);
  button {
    position: relative;
    z-index: 2;
    height: 2rem;
    padding: 0 1rem;
    outline: none;
    border-radius: 3rem;
    background: var(--primary-black);
    color: var(--primary-white);
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.8rem;
  }
`;
