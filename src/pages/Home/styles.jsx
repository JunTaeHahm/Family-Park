import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5rem 0 2rem;
  @media screen and (max-width: 1023px) {
    & {
      padding: 5rem 0 0;
    }
  }
`;

export const Catuion = styled.div`
  position: absolute;
  top: 5rem;
  left: 50%;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--prism-code-3);
  transform: translate(-50%, 0);
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7rem);
  @media screen and (max-width: 767px) {
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
  @media screen and (max-width: 1023px) {
    & {
      width: 50%;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
    }
  }
`;

export const CenterWrap = styled.div`
  width: 42.5%;
  @media screen and (max-width: 1023px) {
    & {
      width: 50%;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
    }
  }
`;

export const RightWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const WriteButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  z-index: 1000;
  opacity: ${(props) => (props.isBtnActive ? 0 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--primary1);
  color: var(--secondary1);
  font-family: 'Montserrat';
  font-size: 2.5rem;
  font-weight: 300;
  cursor: pointer;
  box-shadow: var(--card-shadow);
  transition: all 0.3s;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
    transform: scale(1.05);
  }
  @media screen and (max-width: 1023px) {
    & {
      bottom: 2rem;
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
