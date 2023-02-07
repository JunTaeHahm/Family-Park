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
  background-color: var(--primary-white);
  box-shadow: var(--card);
  svg {
    position: absolute;
    top: 3rem;
    left: 3rem;
    cursor: pointer;
  }
  @media screen and (max-width: 767px) {
    & {
      justify-content: center;
      gap: 2rem;
      height: 60%;
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
  @media screen and (max-width: 767px) {
    & {
      img {
        width: 70%;
      }
    }
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
  background-color: var(--primary-white);
  border: 0.13rem solid var(--primary-grey);
  border-radius: 0.5rem;
  transition: all 0.3s;
  &:focus {
    outline: none;
  }
  &::placeholder {
    height: 100%;
    color: var(--primary-grey);
    text-align: center;
  }
  @media screen and (max-width: 767px) {
    & {
      width: 80%;
      height: 50%;
    }
  }
`;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: var(--primary-black);
  cursor: pointer;
  .button-top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--primary-black);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--primary-white);
    color: var(--primary-black);
    transform: translateY(-0.2rem);
    transition: transform 0.1s ease;
  }

  &:hover .button-top {
    transform: translateY(-0.33em);
  }

  &:active .button-top {
    transform: translateY(0);
  }
`;
