import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const listAni = keyframes`
  from{
    transform: translate(0%,0%);
  }
  to{
    transform: translate(-80%,0%);
  }

`;

export const Container = styled.div`
  position: fixed;
  top: 3rem;
  left: 0;
  overflow: hidden;
  height: 2rem;
  z-index: 99;
  border-bottom: 0.06rem solid var(--black);
  background-color: ${(props) => (props.isLoading ? 'transparent' : 'var(--white)')};
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
  height: 100%;
  display: flex;
  gap: 2rem;
  animation: ${listAni} 300s linear infinite;
`;
