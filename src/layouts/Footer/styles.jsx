import styled from '@emotion/styled';

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 2rem;
  padding: 0 2rem;
  border-top: 0.06rem solid black;
  background-color: var(--secondary2);
  font-size: 0.8rem;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 0.8rem;
      a {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        padding: 0.3rem 1rem;
        border-radius: 2rem;
        background-color: var(--primary1);
        color: var(--secondary1);
        font-weight: 300;
        transition: all 0.2s;
        &:hover {
          background-color: var(--primary2);
          color: var(--primary1);
        }
      }
    }
  }
  @media screen and (max-width: 1023px) {
    & {
      display: none;
    }
  }
`;
