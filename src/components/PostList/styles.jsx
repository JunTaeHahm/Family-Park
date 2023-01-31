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
  margin: 2rem 0;
  padding: 1.5rem 1.5rem 1rem;
  border-radius: 1rem;
  width: 85%;
  background-color: var(--secondary1);
  box-shadow: var(--card-shadow);
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

export const ContentWrap = styled.div`
  text-align: left;
`;
export const DateWrap = styled.div`
  font-family: var(--IMB-Li);
  text-align: right;
`;
export const ActionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  font-size: 1.1rem;
  line-height: 1.4;
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
  outline: none;
  width: 100%;
  background-color: var(--secondary1);
  padding: 0.5rem;
  border: 0.06rem solid var(--primary2);
  border-radius: 0.3rem;
  &::placeholder {
    color: var(--primary1);
    font-size: 1.3rem;
    height: 100%;
  }
`;
export const EditButton = styled.button`
  display: none;
`;
export const Date = styled.div`
  margin: 1.5rem 0 0.3rem;
  font-size: 0.7rem;
`;

export const Avatar = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 0.6rem;
`;
export const Name = styled.span`
  font-size: 0.9rem;
  display: inline-block;
  font-family: var(--IMB-Rg);
  background-color: var(--primary1);
  color: var(--secondary1);
  padding: 0.1rem 0.3rem;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
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
      color: var(--primary1);
    }
    &:last-of-type {
      color: var(--prism-code-3);
    }
    &:hover:first-of-type,
    &:hover:last-of-type {
      text-decoration: underline;
    }
  }
`;
export const Form = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  height: 2rem;
  width: 100%;
`;
export const Label = styled.label`
  width: 92%;
  height: 100%;
  @media screen and (max-width: 768px) {
    & {
      width: 85%;
    }
  }
`;
export const Input = styled.input`
  font-size: 0.8rem;
  width: 100%;
  height: 100%;
  background-color: var(--secondary1);
  padding: 0.3rem;
  text-indent: 0.3rem;
  outline: none;
  border: 0.06rem solid var(--primary2);
  &:focus {
    border: 0.06rem solid var(--primary1);
  }
  &::placeholder {
    color: var(--primary2);
    opacity: 0.5;
    height: 100%;
  }
`;
export const Button = styled.button`
  font-family: var(--IMB-Li);
  font-size: 0.9rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  cursor: pointer;
  width: 8%;
  height: 100%;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
  @media screen and (max-width: 768px) {
    & {
      font-size: 0.7rem;
      width: 15%;
    }
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
  height: 11rem;
  position: absolute;
  overflow: hidden;
  top: 1rem;
  .scroll-bar > div:last-of-type {
    display: none !important;
  }
`;

export const NoComment = styled.div`
  position: relative;
  top: 50%;
  font-family: var(--IMB-Li);
  font-size: 0.8rem;
  text-align: center;
`;
export const Comment = styled.div`
  font-size: 0.8rem;
  line-height: 1.2;
  font-family: var(--IMB-Li);
  position: relative;
  width: 100%;
  margin-bottom: 0.7rem;
  display: flex;
  span {
    display: inline-block;
    &:nth-of-type(1) {
      background-color: var(--primary1);
      color: var(--secondary1);
      text-align: center;
      width: 15%;
      max-width: 15%;
      height: 1.2rem;
      line-height: 1.2rem;
      cursor: pointer;
      margin-right: 0.5rem;
      padding: 0 0.3rem;
      transition: all 0.2s;
      &:hover {
        background-color: var(--primary2);
        color: var(--primary1);
      }
      @media screen and (max-width: 768px) {
        & {
          width: 23%;
          max-width: 23%;
        }
      }
    }
    &:nth-of-type(2) {
      text-align: justify;
      width: 85%;
      max-width: 85%;
      line-height: 1.2rem;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        & {
          width: 77%;
          max-width: 77%;
          padding-right: 0.8rem;
        }
      }
    }
  }
`;
