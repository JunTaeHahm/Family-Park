import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 24rem;
  max-width: 24rem;
`;

export const FormTitle = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1.3rem;
  color: var(--gray);
  font-size: 0.9rem;
  & span {
    font-family: var(--IMB-Rg);
    color: var(--blue);
  }
  &.password-wrap {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      width: 48%;
      display: block;
    }
    div {
      width: 48%;
    }
  }
`;

export const Input = styled.input`
  font-family: var(--IMB-Li);
  background-color: var(--white);
  transition: all 0.3s;
  font-size: 0.9rem;
  border: none;
  box-sizing: border-box;
  margin-top: 0.3rem;
  width: 100%;
  padding: 0.8rem;
  height: 3rem;
  &:focus {
    outline: none;
    border-bottom: 0.06rem solid black;
  }
  &::placeholder {
    color: var(--gray);
    opacity: 0.5;
    font-size: 0.9rem;
    height: 100%;
  }
`;

export const FormRequest = styled.p`
  font-family: var(--IMB-Li);
  font-size: 0.8rem;
  display: block;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
`;

export const Mismatch = styled.span`
  position: absolute;
  top: 0;
  color: red !important;
  text-align: right;
`;

export const Button = styled.button`
  margin: 0.6rem 0 1.3rem;
  width: 100%;
  color: #fff;
  background-color: ${(props) => (props.buttonActive ? 'var(--blue)' : 'var(--gray)')};
  border: none;
  height: 4rem;
  transition: all 0.1s;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0.13rem 0.13rem 0.6rem rgba(0, 0, 0, 0.4);
  &:hover {
    transform: scale(1.02);
  }
`;

export const LinkContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: var(--black);
  margin: 0 auto 0.5rem;
  width: 100%;
  a {
    margin-left: 0.6rem;
    color: var(--black);
    text-decoration: none;
    &:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
`;
