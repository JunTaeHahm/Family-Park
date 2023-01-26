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
  font-family: var(--IMB-Md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0) scaleY(1);
  margin: 2rem 0;
  padding: 1.5rem;
  border-radius: 1rem;
  width: 85%;
  background-color: var(--white);
  box-shadow: 0.3rem 0.3rem 0.3rem #c6c6c6, -0.3rem -0.3rem 0.3rem #ffffff;
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

export const Content = styled.div`
  font-size: 1.1rem;
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
export const EditInput = styled.input`
  font-size: 1.1rem;
  border: none;
  outline: none;
  width: 100%;
  background-color: var(--white);
  border-bottom: 0.06rem solid var(--gray);
  padding-bottom: 0.5rem;
  &::placeholder {
    color: var(--black);
    font-size: 1.3rem;
    height: 100%;
  }
`;
export const EditButton = styled.button`
  display: none;
`;
export const Date = styled.div`
  margin-top: 0.8rem;
  font-size: 0.7rem;
`;

export const Name = styled.span`
  font-size: 0.9rem;
  display: inline-block;
  font-family: var(--IMB-Rg);
  background-color: var(--darkgray);
  color: var(--white);
  transition: all 0.3;
  padding: 0.1rem 0.3rem;
  &:hover {
    background-color: var(--gray);
    color: var(--black);
  }
`;

export const Actions = styled.div`
  font-family: var(--IMB-Li);
  display: flex;
  align-items: center;
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const LikeButton = styled.div`
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.3rem;
  padding: 0.3rem;
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
    height: 15rem;
    transition: all 0.3s;
  }
`;
export const PostAction = styled.div`
  font-family: var(--IMB-Li);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 0.8rem;
  top: -1rem;
  & span {
    margin-left: 0.5rem;
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
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  width: 100%;
`;
export const Label = styled.label`
  width: 92%;
  height: 100%;
`;
export const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  height: 2rem;
  background-color: var(--white);
  padding: 0.3rem;
  text-indent: 0.3rem;
  outline: none;
  border: 0.06rem solid black;
  &:focus {
    border: 0.06rem solid black;
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
  padding-top: 0.3rem;
  font-size: 1.5rem;
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
  width: 3rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.3rem;
  padding: 0.3rem;
`;

export const CommentList = styled.div`
  width: 100%;
  height: 10rem;
  position: absolute;
  overflow: hidden;
  top: 1rem;
  .scroll-bar > div:last-of-type {
    display: none !important;
  }
`;

export const NoComment = styled.div`
  font-family: var(--IMB-Li);
  font-size: 0.8rem;
  text-align: center;
`;
export const Comment = styled.div`
  font-size: 0.9rem;
  line-height: 1.2;
  font-family: var(--IMB-Li);
  position: relative;
  width: 100%;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    &:nth-of-type(1) {
      border-radius: 3rem;
      background-color: var(--darkgray);
      color: var(--white);
      width: 5rem;
      min-width: 5rem;
      text-align: center;
    }
    &:nth-of-type(2) {
      font-family: var(--IMB-Rg);
      text-align: left;
      margin-left: 0.6rem;
    }
    &:nth-of-type(3) {
      position: absolute;
      right: 0;
      width: 6rem;
      max-width: 6rem;
      text-align: right;
      b {
        opacity: 0.5;
        margin-right: 0.6rem;
        cursor: pointer;
        &:hover {
          opacity: 1;
          color: red;
        }
      }
    }
  }
`;
