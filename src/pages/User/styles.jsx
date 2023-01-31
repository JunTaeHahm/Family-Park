import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 5rem 0 2rem;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary2);
  z-index: 10;
  margin-top: 2rem;
`;
export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  margin-right: 3rem;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    & {
      width: 5rem;
      height: 5rem;
      margin-right: 1rem;
    }
  }
`;

export const ProfileName = styled.div`
  height: 5rem;
  line-height: 5rem;
  font-size: 2.2rem;
  @media screen and (max-width: 768px) {
    & {
      font-size: 1.8rem;
    }
  }
`;
export const UserTitle = styled.div`
  font-size: 1.3rem;
  background-color: var(--primary1);
  line-height: 1.3;
  padding: 0 0.3rem;
`;

export const MenuWrap = styled.div`
  position: relative;
  font-size: 1.3rem;
  font-family: var(--Mont-Rg);
  width: 100%;
  height: 4rem;
  margin: 2rem 0;
  span {
    cursor: pointer;
    margin: 0 3rem;
    display: inline-block;
    line-height: 3rem;
    width: 10rem;
    height: 3rem;
    &:first-of-type::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translate(-13rem, 0);
      transition: all 0.3s;
      display: block;
      width: 10rem;
      height: 0.3rem;
      border-radius: 0.6rem;
      margin-bottom: 1.5rem;
      background-color: var(--primary1);
    }
    &.collection:first-of-type::after {
      transform: translate(3rem, 0);
    }
  }
  @media screen and (max-width: 768px) {
    & {
      margin: 1rem 0;
      span {
        margin: 0 1rem;
        &:first-of-type::after {
          transform: translate(-11rem, 0);
        }
        &.collection:first-of-type::after {
          transform: translate(1rem, 0);
        }
      }
    }
  }
`;
export const Loading = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const MyPost = styled.span``;
export const Collection = styled.span``;

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
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      max-width: 100%;
    }
  }
`;

export const NoPost = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DateSection = styled.section``;

export const DateHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: sticky;
  height: 3rem;
  top: 0;
  z-index: 10;
  background-color: var(--secondary2);
  button {
    font-family: var(--IMB-Li);
    font-size: 0.9rem;
    height: 2rem;
    line-height: 1.8rem;
    padding: 0 1rem;
    z-index: 2;
    border-radius: 3rem;
    position: relative;
    background: var(--primary1);
    color: var(--secondary1);
    outline: none;
  }
`;
