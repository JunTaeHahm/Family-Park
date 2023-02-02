import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 5rem 0 2rem;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Catuion = styled.div`
  width: 100%;
  color: var(--prism-code-3);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0);
  top: 5rem;
  z-index: 99;
`;
export const Main = styled.div`
  min-height: calc(100vh - 7rem);
  display: flex;
  @media screen and (max-width: 768px) {
    & {
      flex-wrap: wrap;
    }
  }
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 42.5%;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const CenterWrap = styled.div`
  width: 42.5%;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const RightWrap = styled.div`
  width: 15%;
`;

export const WriteButton = styled.div`
  font-family: var(--Mont-Li);
  z-index: 1000;
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  border-radius: 50%;
  background-color: var(--primary1);
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  color: var(--secondary1);
  opacity: ${(props) => (props.isBtnActive ? 0 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--card-shadow);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    & {
      width: 3.5rem;
      height: 3.5rem;
      bottom: 2rem;
    }
  }
`;
