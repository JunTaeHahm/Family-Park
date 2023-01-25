import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 100px 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & {
      padding: 80px 0 0;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      padding: 70px 0 0;
    }
  }
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  z-index: 10;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    & {
      margin-top: 1rem;
    }
  }
`;
export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    & {
      margin-bottom: 1rem;
    }
  }
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    & {
      width: 4rem;
      height: 4rem;
    }
  }
`;

export const ProfileName = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 24px;
  @media screen and (max-width: 375px) {
    & {
      height: 3rem;
      line-height: 3rem;
      font-size: 20px;
    }
  }
`;
export const UserTitle = styled.div`
  font-size: 20px;
  background-color: aquamarine;
  line-height: 1.3;
  padding: 0 0.3rem;
  @media screen and (max-width: 375px) {
    & {
      font-size: 16px;
    }
  }
`;

export const MenuWrap = styled.div`
  position: relative;
  font-size: 20px;
  font-family: var(--Mont-Rg);
  width: 100%;
  height: 4rem;
  margin: 1rem 0;
  span {
    cursor: pointer;
    margin: 0 50px;
    display: inline-block;
    line-height: 40px;
    width: 150px;
    height: 40px;
    &:first-of-type::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translate(-200px, 0);
      transition: all 0.3s;
      display: block;
      width: 150px;
      height: 5px;
      border-radius: 10px;
      margin-bottom: 1.5rem;
      background-color: var(--darkgray);
    }
    &.collection:first-of-type::after {
      transform: translate(50px, 0);
    }
  }
  @media screen and (max-width: 375px) {
    & {
      font-size: 16px;
      span {
        margin: 0 20px;
        line-height: 3rem;
        width: 120px;
        height: 3rem;
        &:first-of-type::after {
          transform: translate(-140px, 0);
          width: 120px;
        }
        &.collection:first-of-type::after {
          transform: translate(20px, 0);
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
  padding-bottom: 50px;
`;

export const List = styled.div`
  max-width: 40%;
  min-width: 40%;
  height: 100%;
  @media screen and (max-width: 768px) {
    & {
      max-width: 90%;
      min-width: 90%;
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
  height: 50px;
  top: 0;
  z-index: 10;
  background-color: var(--background);
  button {
    font-family: var(--IMB-Li);
    font-size: 14px;
    height: 30px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    border-radius: 50px;
    position: relative;
    background: var(--darkgray);
    color: var(--white);
    outline: none;
  }
`;
