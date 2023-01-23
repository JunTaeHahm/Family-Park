import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const heartbeat = keyframes`
    0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0) scaleY(1);
  margin: 1rem 0 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 85%;
  background-color: var(--white);
  box-shadow: 5px 5px 5px #c6c6c6, -5px -5px 5px #ffffff;
  transition: all 0.5s;
  &.open {
    height: max-content;
    transition: all 0.5s;
  }
  &.removed {
    position: absolute;
    opacity: 0;
    transform: translate(-500%, 0);
  }
  &:hover {
    transform: translate(-50%, 0) scale(1.02);
  }
  &:hover .likeBtn {
    animation: ${heartbeat} 0.3s infinite;
  }
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const First = styled.div`
  text-align: left;
`;
export const Second = styled.div`
  font-family: var(--IMB-Li);
  text-align: right;
`;
export const Third = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 20px;
  @media screen and (max-width: 1366px) {
    & {
      font-size: 16px;
    }
  }
`;
export const EditForm = styled.form`
  height: max-content;
`;
export const EditLabel = styled.label`
  width: 100%;
  height: 100%;
  outline: none;
  border-color: transparent;
  border-style: none;
`;
export const EditInput = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  background-color: var(--white);
  box-sizing: border-box;
  font-size: 20px;
  border-color: transparent;
  border-style: none;
  padding: 0;
  &::placeholder {
    color: var(--black);
    font-size: 20px;
    height: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const EditButton = styled.button`
  display: none;
`;
export const Date = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

export const Name = styled.div`
  font-family: var(--IMB-Rg);
`;

export const Actions = styled.div`
  font-family: var(--IMB-Li);
  display: flex;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LikeButton = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  padding: 5px;
  .heart {
    color: #ee6a55;
  }
`;
export const CommentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 0;
  visibility: hidden;
  transition: all 0.3s;
  opacity: 0;
  &.open {
    visibility: visible;
    opacity: 1;
    height: 300px;
    transition: all 0.3s;
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      border-radius: 5px;
      height: 0.5px;
      background-color: var(--gray);
    }
  }
`;

export const PostAction = styled.div`
  font-family: var(--IMB-Li);
  position: absolute;
  right: 0;
  top: 20px;
  font-size: 14px;
  & span {
    margin-left: 10px;
    cursor: pointer;
    &:first-of-type {
      color: var(--gray);
    }
    &:last-of-type {
      color: red;
      opacity: 0.5;
    }
    &:hover:first-of-type {
      color: var(--black);
    }
    &:hover:last-of-type {
      opacity: 1;
    }
  }
`;

export const Form = styled.form`
  font-size: 12px;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 95%;
  height: 35px;
`;
export const Label = styled.label`
  width: 92%;
  height: 100%;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: var(--white);
  border: none;
  box-sizing: border-box;
  padding: 5px;
  text-indent: 5px;
  border: 0.5px solid black;
  outline: none;
  &:focus {
    border: 1px solid black;
  }
  &::placeholder {
    color: var(--gray);
    opacity: 0.5;
    height: 100%;
  }
`;
export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  padding-top: 5px;
  font-size: 24px;
  width: 8%;
  height: 100%;
  transition: all 0.3s;
  &.active,
  &:hover {
    animation: ${heartbeat} 0.5s infinite;
  }
`;

export const CommentButton = styled.div`
  z-index: -1;
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  padding: 5px;
`;

export const CommentList = styled.div`
  font-size: 14px;
  width: 98%;
  position: absolute;
  overflow: hidden;
  height: 155px;
  top: 45px;
  overflow-y: hidden;
`;

export const NoComment = styled.div`
  font-family: var(--IMB-Li);
  text-align: center;
  padding-top: 60px;
`;
export const Comment = styled.div`
  font-family: var(--IMB-Li);
  position: relative;
  width: 100%;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    &:nth-of-type(1) {
      border-radius: 50px;
      background-color: var(--darkgray);
      color: var(--white);
      width: 80px;
      min-width: 80px;
      text-align: center;
    }
    &:nth-of-type(2) {
      font-family: var(--IMB-Rg);
      width: 65%;
      text-align: left;
      margin-left: 10px;
    }
    &:nth-of-type(3) {
      position: absolute;
      right: 0;
      width: 90px;
      max-width: 90px;
      text-align: left;
      b {
        opacity: 0.5;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          opacity: 1;
          color: red;
        }
      }
    }
  }
`;
