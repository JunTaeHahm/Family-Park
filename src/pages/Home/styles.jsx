import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
`;

export const WriteButton = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
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
  font-family: 'Montserrat';
  font-size: 2.5rem;
  font-weight: 300;
  cursor: pointer;
  box-shadow: var(--card);
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 1023px) {
    & {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;
