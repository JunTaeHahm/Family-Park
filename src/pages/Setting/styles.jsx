import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 10rem;
  @media screen and (max-width: 1023px) {
    & {
      padding: 7rem 2rem 0;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      padding-top: 7rem;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 30vh;
`;

export const Title = styled.h2`
  margin-bottom: 3rem;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 100% 0.3rem;
  cursor: default;
  transition: background-size 0.2s ease;
  &:hover {
    background-size: 100% 88%;
  }
  @media screen and (max-width: 767px) {
    & {
      margin-bottom: 1rem;
    }
  }
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
      border-bottom: 0.06rem solid var(--primary-skyblue);
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
export const UploadButtonBack = styled.span`
  border-radius: 0.5rem;
  background-color: var(--primary-black);
`;

export const Upload = styled.label`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.6rem 1.8rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  color: var(--primary-black);
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  input {
    display: none;
  }
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
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
  justify-content: center;
  gap: 1.5rem;
  width: 70%;
  height: 100%;
  padding: 2rem;
  @media screen and (max-width: 767px) {
    & {
      justify-content: flex-start;
      gap: 1rem;
      width: 100%;
      height: auto;
      border-top: 0.06rem solid var(--primary-black);
    }
  }
`;

export const UserName = styled.span`
  display: inline-block;
  font-size: 2.2rem;
  @media screen and (max-width: 767px) {
    & {
      font-size: 1.8rem;
    }
  }
`;

export const UserTitle = styled.span``;
export const Label = styled.label``;

export const NameInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 0.06rem solid var(--primary-black);
  border-radius: 0.3rem;
  font-size: 2.2rem;
  background-color: transparent;
  outline: none;
  &:focus {
    border: 0.1rem solid var(--primary-black);
  }
  &::placeholder {
    height: 100%;
    font-size: 1.3rem;
    color: var(--primary-black);
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
  border: 0.06rem solid var(--primary-black);
  border-radius: 0.3rem;
  background-color: transparent;
  outline: none;
  &:focus {
    border: 0.1rem solid var(--primary-black);
  }
  &::placeholder {
    height: 100%;
    font-size: 1.3rem;
    color: var(--primary-black);
  }
`;

export const EditButtonBack = styled.span`
  display: inline-block;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--primary-black);
`;

export const Edit = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.6rem 1.8rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  color: var(--primary-black);
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  input {
    display: none;
  }
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const DeleteAccountForm = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 5rem 2rem 2rem;
  border-top: 0.06rem solid var(--primary-black);
  @media screen and (max-width: 767px) {
    & {
      margin-top: 0;
      padding: 1rem 2rem 2rem;
    }
  }
`;

export const Menu = styled.span`
  display: inline-block;
  width: 30%;
  padding: 1rem 0;
  font-size: 1.3rem;
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      font-size: 1.2rem;
    }
  }
`;

export const DeleteAccountButtonBack = styled.span`
  display: inline-block;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--primary-black);
`;

export const DeleteAccount = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.6rem 1.8rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  color: var(--primary-black);
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  input {
    display: none;
  }
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const Caution = styled.div`
  margin-top: 1rem;
  font-weight: 300;
`;
