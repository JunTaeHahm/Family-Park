import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Form = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  width: 80%;
  height: 80%;
  border-radius: 1rem;
  background-color: var(--secondary1);
  box-shadow: var(--card-shadow);
  svg {
    position: absolute;
    top: 3rem;
    left: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    & {
      gap: 0;
      height: 25%;
      svg {
        display: none;
      }
    }
  }
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 30vw;
    object-fit: cover;
  }
`;

export const Input = styled.textarea`
  box-sizing: border-box;
  width: 80%;
  height: 15%;
  padding: 1rem;
  resize: none;
  border: none;
  line-height: 1.5;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border-bottom: 0.06rem solid var(--primary1);
    transition: all 0.3s;
  }
  &::placeholder {
    opacity: 0.5;
    height: 100%;
    color: var(gray);
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    & {
      width: 80%;
      margin: 2.5rem 0rem 2rem;
      padding: 0;
      font-size: 0.9rem;
    }
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.buttonActive ? 'var(--primary1)' : 'var(--deactive)')};
  color: var(--secondary1);
  cursor: pointer;
  @media screen and (max-width: 767px) {
    & {
      align-self: flex-end;
      width: 4.5rem;
      height: 1.8rem;
      margin-right: 10%;
      font-size: 0.8rem;
    }
  }
`;
