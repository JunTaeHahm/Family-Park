import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 5rem 0 2rem;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const Catuion = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0);
  top: 5rem;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
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
  width: 35%;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const CenterWrap = styled.div`
  width: 35%;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const RightWrap = styled.div`
  width: 30%;
`;

export const WriteButton = styled.div`
  z-index: 1000;
  width: 4rem;
  height: 4rem;
  font-size: 2.5rem;
  border-radius: 50%;
  background-color: var(--black);
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  font-family: var(--Mont-Li);
  color: var(--white);
  opacity: ${(props) => (props.isBtnActive ? 0 : 1)};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0.13rem 0.13rem 0.6rem rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: var(--gray);
    color: var(--black);
    transform: scale(1.05);
  }
`;
