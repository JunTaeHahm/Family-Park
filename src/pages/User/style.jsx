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
`;

export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  z-index: 10;
  margin-top: 30px;
`;
export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 30px;
`;

export const ProfileName = styled.div`
  height: 80px;
  line-height: 80px;
  font-size: 24px;
`;
export const UserTitle = styled.div`
  font-size: 20px;
  background-color: aquamarine;
  line-height: 1.3;
  padding: 0 5px;
`;

export const MenuWrap = styled.div`
  font-size: 20px;
  font-family: var(--Mont-Rg);
  width: 100%;
  height: 80px;
  margin: 20px 0;
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
      margin-bottom: 20px;
      background-color: var(--darkgray);
    }
    &.collection:first-of-type::after {
      transform: translate(50px, 0);
    }
  }
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
`;

export const NoPost = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const DateSection = styled.section`
  background-color: pink;
`;

export const DateHeader = styled.div`
  background-color: green;
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
