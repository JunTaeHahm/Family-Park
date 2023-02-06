import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  height: 100vh;
  max-width: 768px;
  margin: 0 auto;
  padding: 5rem 0 2rem;
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
  background-color: var(--secondary2);
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
`;

export const MenuWrap = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  margin: 2rem 0 1rem;
  font-size: 1.3rem;
  span {
    display: inline-block;
    width: 10rem;
    height: 3rem;
    margin: 0 3rem;
    line-height: 3rem;
    cursor: pointer;
    &:first-of-type::after {
      content: '';
      position: absolute;
      left: 50%;
      display: block;
      width: 10rem;
      height: 0.3rem;
      margin-bottom: 1.5rem;
      border-radius: 0.6rem;
      background-color: var(--primary1);
      transform: translate(-13rem, 0);
      transition: all 0.3s;
    }
    &.collection:first-of-type::after {
      transform: translate(3rem, 0);
    }
    &.notice:first-of-type::after {
      transform: translate(-50%, 0);
    }
  }
  @media screen and (max-width: 767px) {
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 30vh;
`;

export const Notice = styled.span``;
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
  @media screen and (max-width: 767px) {
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
