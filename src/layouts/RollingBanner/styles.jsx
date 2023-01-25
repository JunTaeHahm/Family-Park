import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const listAni = keyframes`
  from{
    transform: translate(0%,0%);
  }
  /* 50%{
    transform: translate(-80%,0%);
  }
  50.1%{
    transform: translate(0%,0%);
  } */
  to{
    transform: translate(-80%,0%);
  }

`;

export const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  overflow: hidden;
  height: 40px;
  z-index: 99;
  border-bottom: 1px solid var(--black);
  background-color: ${(props) => (props.isLoading ? 'transparent' : 'var(--white)')};
  @media screen and (max-width: 768px) {
    & {
      font-size: 12px;
      top: 50px;
      height: 30px;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      top: 40px;
    }
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transform: scale(0.5);
  }
`;

export const List = styled.div`
  width: max-content;
  font-size: 12px;
  height: 100%;
  display: flex;
  gap: 2rem;
  animation: ${listAni} 300s linear infinite;
  @media screen and (max-width: 768px) {
    & {
      animation-duration: 500s;
    }
  }
`;
