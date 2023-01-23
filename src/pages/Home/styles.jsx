import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 0 40px;
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 768px) {
    & {
      padding: 80px 0 0;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      flex-direction: column;
      overflow: visible;
      padding-top: 70px;
    }
  }
`;

export const Main = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  @media screen and (max-width: 768px) {
    & {
      min-height: calc(100vh - 80px);
    }
  }
  @media screen and (max-width: 375px) {
    & {
      min-height: calc(100vh - 100px);
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
  @media screen and (max-width: 375px) {
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
  font-size: 36px;
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
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media screen and (max-width: 375px) {
    & {
      bottom: calc(4rem - 30px);
    }
  }
`;
