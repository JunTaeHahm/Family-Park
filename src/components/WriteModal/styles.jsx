import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const Form = styled.div`
  position: relative;
  z-index: 10;
  width: 80%;
  height: 80%;
  background-color: var(--secondary1);
  box-shadow: var(--card-shadow);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  svg {
    position: absolute;
    left: 3rem;
    top: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    & {
      height: 25%;
      gap: 0;
      svg {
        display: none;
      }
    }
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 30vw;
    object-fit: cover;
  }
`;

export const Input = styled.textarea`
  transition: all 0.3s;
  border: none;
  resize: none;
  box-sizing: border-box;
  width: 80%;
  padding: 1rem;
  height: 15%;
  line-height: 1.5;
  &:focus {
    outline: none;
    border-bottom: 0.06rem solid var(--primary1);
    transition: all 0.3s;
  }
  &::placeholder {
    text-align: center;
    color: var(gray);
    opacity: 0.5;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    & {
      font-size: 0.9rem;
      width: 80%;
      padding: 0;
      margin: 2.5rem 0rem 2rem;
    }
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.buttonActive ? 'var(--primary1)' : 'var(--deactive)')};
  color: var(--secondary1);
  @media screen and (max-width: 768px) {
    & {
      font-size: 0.8rem;
      align-self: flex-end;
      margin-right: 10%;
      width: 4.5rem;
      height: 1.8rem;
    }
  }
`;
