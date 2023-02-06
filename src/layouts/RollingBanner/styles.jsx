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
  z-index: 99;
  overflow: hidden;
  height: 2rem;
  border-top: 0.06rem solid var(--primary1);
  border-bottom: 0.06rem solid var(--primary1);
  background-color: ${(props) => (props.isLoading ? 'transparent' : 'var(--secondary1)')};
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  svg {
    transform: scale(0.5);
  }
`;

export const List = styled.div`
  display: flex;
  gap: 2rem;
  width: max-content;
  height: 100%;
  animation: ${listAni} 300s linear infinite;
`;
