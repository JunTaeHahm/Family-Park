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

export const HeaderLogo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-bottom: 2rem;
  img {
    width: 15rem;
    height: 100%;
    vertical-align: middle;
    object-fit: scale-down;
  }
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
  color: var(--primary3);
  font-size: 0.9rem;
  & span {
    font-family: var(--IMB-Rg);
    color: var(--primary1);
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
  background-color: var(--secondary1);
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
    color: var(--primary3);
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
  color: var(--prism-code-3) !important;
  text-align: right;
`;

export const Button = styled.button`
  margin: 0.6rem 0 1.3rem;
  width: 100%;
  color: #fff;
  background-color: ${(props) => (props.buttonActive ? 'var(--primary1)' : 'var(--deactive)')};
  border: none;
  height: 4rem;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: var(--card-shadow);
`;

export const LinkContainer = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
  color: var(--primary1);
  margin: 0 auto 0.5rem;
  width: 100%;
  a {
    margin-left: 0.6rem;
    color: var(--primary1);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
