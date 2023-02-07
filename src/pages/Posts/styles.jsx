import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  /* height: 100%; */
  padding-top: 5rem;
`;

export const TopButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 10rem;
  z-index: 1000;
  opacity: ${(props) => (props.isBtnActive ? 0 : 1)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--primary-white);
  font-family: 'Montserrat';
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: var(--card);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1023px) {
    & {
      bottom: 6.5rem;
      width: 3.5rem;
      height: 3.5rem;
    }
  }
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
  background-color: var(--primary-black);
  color: var(--primary-white);
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: var(--card);
  transition: all 0.3s;
  &:hover {
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
