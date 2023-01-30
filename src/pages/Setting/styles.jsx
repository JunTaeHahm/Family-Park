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
  width: 50vw;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const AvatarForm = styled.form`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 1rem;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 10rem;
  height: 10rem;
`;
export const Upload = styled.label`
  display: inline-block;
  padding: 0.6rem 1.8rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: var(--darkgray);
  color: var(--white);
  input {
    display: none;
  }
  &:hover {
    background-color: var(--gray);
    color: var(--darkgray);
  }
`;

export const Remove = styled.button`
  display: inline-block;
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
`;
export const Name = styled.span`
  display: inline-block;
  font-size: 2.5rem;
`;
export const Title = styled.span``;
export const Edit = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  align-self: flex-end;
  border-radius: 0.5rem;
  background-color: var(--darkgray);
  color: var(--white);
  &:hover {
    background-color: var(--gray);
    color: var(--darkgray);
  }
`;
export const SettingForm = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const WithdrawalForm = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
`;
export const Menu = styled.span`
  display: inline-block;
  width: 30%;
  font-size: 1.3rem;
  padding: 1rem 0;
`;
export const Withdrawal = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--darkgray);
  color: var(--white);
  &:hover {
    background-color: var(--gray);
    color: var(--darkgray);
  }
`;
export const Caution = styled.div`
  margin-top: 0.5rem;
  font-family: var(--IMB-Li);
`;
