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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 768px;
  padding: 1rem;
`;

export const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 767px) {
    & {
      flex-wrap: wrap;
    }
  }
`;

export const AvatarForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30%;
  height: 100%;
  padding-top: 2rem;
  @media screen and (max-width: 767px) {
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
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    & {
      width: 7rem;
      height: 7rem;
    }
  }
`;

export const Upload = styled.label`
  display: inline-block;
  padding: 0.6rem 1.8rem;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  cursor: pointer;
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
  height: 100%;
  padding: 2rem;
  @media screen and (max-width: 767px) {
    & {
      gap: 1rem;
      width: 100%;
    }
  }
`;

export const Name = styled.span`
  display: inline-block;
  font-size: 2.2rem;
  @media screen and (max-width: 767px) {
    & {
      font-size: 1.8rem;
    }
  }
`;

export const Title = styled.span``;
export const Label = styled.label``;

export const NameInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 0.06rem solid var(--primary1);
  border-radius: 0.3rem;
  background-color: transparent;
  font-size: 2.2rem;
  &:focus {
    border: 0.1rem solid var(--primary1);
  }
  &::placeholder {
    height: 100%;
    color: var(--primary1);
    font-size: 1.3rem;
  }
  @media screen and (max-width: 767px) {
    & {
      font-size: 1.8rem;
    }
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 0.06rem solid var(--primary1);
  border-radius: 0.3rem;
  background-color: transparent;
  &:focus {
    border: 0.1rem solid var(--primary1);
  }
  &::placeholder {
    height: 100%;
    color: var(--primary1);
    font-size: 1.3rem;
  }
`;

export const Edit = styled.button`
  display: inline-block;
  align-self: flex-end;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  cursor: pointer;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;

export const SettingForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  margin: 2rem 0;
  background-color: transparent;
`;

export const WithdrawalForm = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Menu = styled.span`
  display: inline-block;
  width: 30%;
  padding: 1rem 0;
  font-size: 1.3rem;
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      padding: 0.5rem 0;
      font-size: 1.2rem;
    }
  }
`;

export const Withdrawal = styled.button`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  cursor: pointer;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;

export const Caution = styled.div`
  margin-top: 0.5rem;
  font-weight: 300;
  @media screen and (max-width: 767px) {
    & {
      margin-top: 1rem;
    }
  }
`;
