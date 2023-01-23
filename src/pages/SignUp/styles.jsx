import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 30px;
  font-family: var(--Mont-Bd);
  font-size: 24px;
`;
export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`;

export const FormTitle = styled.h2`
  font-weight: normal;
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: var(--gray);
  font-size: 14px;
  & span {
    color: var(--blue);
    margin-top: 15px;
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
  background-color: var(--white);
  transition: all 0.3s;
  font-size: 14px;
  border: none;
  box-sizing: border-box;
  margin: 5px 0 0px;
  width: 100%;
  padding: 12px;
  height: 44px;
  &:focus {
    outline: none;
    border-bottom: 0.5px solid black;
  }
  &::placeholder {
    color: var(--gray);
    opacity: 0.5;
    font-size: 14px;
    height: 100%;
  }
`;

export const FormRequest = styled.p`
  font-family: var(--IMB-Li);
  font-size: 12px;
  display: block;
  width: 100%;
  text-align: center;
  padding-top: 5px;
`;

export const Mismatch = styled.span`
  position: absolute;
  top: 0;
  color: red !important;
  text-align: right;
`;

export const Button = styled.button`
  margin: 10px 0 20px;
  width: 100%;
  color: #fff;
  background-color: ${(props) => (props.buttonActive ? 'var(--blue)' : 'var(--gray)')};
  border: none;
  font-size: 18px;
  height: 60px;
  transition: all 0.1s;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.02);
  }
`;

export const LinkContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  color: var(--black);
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  a {
    margin-left: 10px;
    color: var(--black);
    text-decoration: none;
    &:hover {
      color: var(--blue);
      text-decoration: underline;
    }
  }
`;
