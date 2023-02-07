import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 5rem;
`;
export const NoticePopup = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const NoticeWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  width: 20rem;
  height: 25rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--primary-white);
  transform: translate(-50%, -50%);
  button {
    position: absolute;
    bottom: 0;
    padding: 0.2rem 1rem;
    margin-bottom: 2rem;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NoticeTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
`;
export const NoticeDate = styled.span`
  display: inline-block;
  position: relative;
  margin: 2rem 0 0.5rem;
  padding: 0.2rem 1rem;
  border-radius: 10rem;
  background-color: var(--primary-black);
  color: var(--primary-white);
  text-align: center;
`;
export const NoticeList = styled.p`
  margin: 0.5rem 0;
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
  font-family: 'Montserrat';
  font-size: 2.5rem;
  font-weight: 300;
  cursor: pointer;
  box-shadow: var(--card);
  transition: all 0.3s;
  &:hover {
    background-color: var(--primary-skyblue);
    color: var(--primary-black);
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
