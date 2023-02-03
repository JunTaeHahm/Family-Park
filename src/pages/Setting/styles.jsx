import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
`;

export const SettingWrap = styled.div`
  width: 100%;
  height: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    & {
      flex-wrap: wrap;
    }
  }
`;

export const AvatarForm = styled.form`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      height: min-content;
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-bottom: 0.06rem solid var(--primary2);
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 10rem;
  height: 10rem;
  @media screen and (max-width: 768px) {
    & {
      width: 7rem;
      height: 7rem;
    }
  }
`;
export const Upload = styled.label`
  display: inline-block;
  padding: 0.6rem 1.8rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  input {
    display: none;
  }
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;

export const Remove = styled.button`
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const UserForm = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  height: 100%;
  @media screen and (max-width: 768px) {
    & {
      gap: 1rem;
      width: 100%;
    }
  }
`;
export const Name = styled.span`
  display: inline-block;
  font-size: 2.2rem;
  @media screen and (max-width: 768px) {
    & {
      font-size: 1.8rem;
    }
  }
`;

export const Title = styled.span``;

export const Label = styled.label``;

export const NameInput = styled.input`
  font-size: 2.2rem;
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border: 0.06rem solid var(--primary2);
  border-radius: 0.3rem;
  &:focus {
    border: 0.1rem solid var(--primary1);
  }
  &::placeholder {
    color: var(--primary1);
    font-size: 1.3rem;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    & {
      font-size: 1.8rem;
    }
  }
`;
export const TitleInput = styled.input`
  background-color: transparent;
  outline: none;
  width: 100%;
  padding: 0.5rem;
  border: 0.06rem solid var(--primary2);
  border-radius: 0.3rem;
  &:focus {
    border: 0.1rem solid var(--primary1);
  }
  &::placeholder {
    color: var(--primary1);
    font-size: 1.3rem;
    height: 100%;
  }
`;

export const Edit = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;
export const SettingForm = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 2rem 0;
`;

export const WithdrawalForm = styled.div`
  width: 100%;
  padding: 1rem;
`;
export const Menu = styled.span`
  display: inline-block;
  width: 30%;
  font-size: 1.3rem;
  padding: 1rem 0;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      font-size: 1.2rem;
      padding: 0.5rem 0;
    }
  }
`;
export const Withdrawal = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;
export const Caution = styled.div`
  margin-top: 0.5rem;
  font-weight: 300;
  @media screen and (max-width: 768px) {
    & {
      margin-top: 1rem;
    }
  }
`;
