import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const Form = styled.form`
  position: relative;
  z-index: 10;
  width: 80%;
  height: 80%;
  background-color: var(--white);
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5), 0 0 2rem rgba(0, 0, 0, 0.5);
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
    & svg {
      display: none;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      max-height: 200px;
      gap: 1.5rem;
    }
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-family: var(--Mont-Bd);
  @media screen and (max-width: 375px) {
    & {
      font-size: 20px;
    }
  }
`;

export const Input = styled.input`
  transition: all 0.3s;
  border: none;
  box-sizing: border-box;
  width: 80%;
  height: 10%;
  max-height: 70px;
  padding: 0.8rem;
  text-indent: 0.8rem;
  &:focus {
    outline: none;
    border-bottom: 1px solid var(--black);
    transition: all 0.3s;
  }
  &::placeholder {
    text-align: center;
    color: var(gray);
    opacity: 0.5;
    height: 100%;
  }
  @media screen and (max-width: 375px) {
    & {
      text-indent: 5px;
      min-height: 20%;
    }
    &:focus {
      border: none;
    }
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${(props) => (props.buttonActive ? 'var(--black)' : 'var(--gray)')};
  color: var(--white);
  @media screen and (max-width: 375px) {
    & {
      width: 40%;
      height: 15%;
    }
  }
`;
