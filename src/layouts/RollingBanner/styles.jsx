import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const listAni = keyframes`
  0%{
    transform: translate(0%,0%);
  }
  50%{
    transform: translate(-80%,0%);
  }
  50.1%{
    transform: translate(0%,0%);
  }
  100%{
    transform: translate(-80%,0%);
  }

`;

export const Container = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  overflow: hidden;
  border-bottom: 1px solid var(--black);
  height: 40px;
  z-index: 99;
  background-color: var(--white);
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

export const List = styled.div`
  width: max-content;
  font-size: 12px;
  height: 100%;
  display: flex;
  gap: 2rem;
  animation: ${listAni} 1500s linear infinite;
  @media screen and (max-width: 768px) {
    & {
      animation-duration: 2000s;
    }
  }
`;
