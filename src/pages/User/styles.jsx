import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  padding-top: 6rem;
  text-align: center;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 767px) {
    & {
      overflow: visible;
    }
  }
`;

export const ProfileWrap = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  background-color: var(--background);
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  width: 7rem;
  height: 7rem;
  object-fit: cover;
  margin-right: 3rem;
  border-radius: 50%;
  @media screen and (max-width: 767px) {
    & {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }
  }
`;

export const ProfileName = styled.div`
  height: 5rem;
  font-size: 2.2rem;
  line-height: 5rem;
  @media screen and (max-width: 767px) {
    & {
      font-size: 1.8rem;
    }
  }
`;

export const UserTitle = styled.div`
  padding: 0 0.3rem;
  font-size: 1.3rem;
  line-height: 1.3;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-repeat: no-repeat;
  background-size: 100% 0.3rem;
  background-position: 0 50%;
  cursor: pointer;
  transition: background-size 0.2s ease-in;
  &:hover {
    background-size: 100% 88%;
  }
`;

export const MenuWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 4rem;
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  button {
    width: 8rem;
    border-radius: 0.5rem;
    background-color: var(--primary-black);
    cursor: pointer;
    &.active span {
      background: var(--primary-white);
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

export const UserPost = styled.button``;
export const MyPost = styled.button``;
export const Collection = styled.button``;

export const Button = styled.span`
  display: inline-block;
  width: 8rem;
  box-sizing: border-box;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--primary-white);
  color: var(--primary-black);
  transform: translateY(-0.2rem);
  transition: transform 0.1s ease;
  &:hover {
    transform: translateY(-0.33rem);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const PostWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: min-content;
  padding-bottom: 3rem;
`;

export const List = styled.div`
  width: 90%;
  height: 100%;
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const NoPost = styled.div`
  position: absolute;
  top: 200%;
  left: 50%;
  transform: translate(-50%, 0);
`;
