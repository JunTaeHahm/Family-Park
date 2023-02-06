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
  position: relative;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 2rem 0;
  padding: 1.5rem 1.5rem 1rem;
  border-radius: 1rem;
  background-color: var(--secondary1);
  box-shadow: var(--card-shadow);
  transform: translate(-50%, 0) scaleY(1);
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
    @media screen and (max-width: 767px) {
      & {
        animation: none;
      }
    }
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
  font-weight: 300;
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
  text-align: justify;
  white-space: pre-line;
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
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 0.06rem solid var(--primary2);
  border-radius: 0.3rem;
  background-color: var(--secondary1);
  font-size: 1.1rem;
  resize: none;
  &::placeholder {
    height: 100%;
    color: var(--primary1);
    font-size: 1.3rem;
  }
`;

export const EditButton = styled.button`
  display: none;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 3rem;
  height: 2rem;
  padding: 0.3rem;
  cursor: pointer;
  .heart {
    color: #ee6a55;
  }
`;

export const CommentButton = styled.div`
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  width: 3rem;
  height: 2rem;
  padding: 0.3rem;
  cursor: pointer;
`;

export const Date = styled.div`
  margin: 1.5rem 0 0.3rem;
  font-size: 0.7rem;
`;

export const Avatar = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: cover;
  margin-right: 0.6rem;
  border-radius: 50%;
`;

export const Name = styled.span`
  display: inline-block;
  padding: 0.1rem 0.3rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  font-size: 0.9rem;
  font-weight: normal;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
`;

export const CommentWrap = styled.div`
  position: relative;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 0;
  transition: all 0.3s;
  &.open {
    opacity: 1;
    visibility: visible;
    height: 15rem;
    transition: all 0.3s;
  }
`;

export const PostAction = styled.div`
  position: absolute;
  top: -1rem;
  left: 50%;
  font-size: 0.8rem;
  font-weight: 300;
  transform: translate(-50%, 0);
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
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2rem;
`;

export const Label = styled.label`
  width: 90%;
  height: 100%;
  @media screen and (max-width: 1023px) {
    & {
      width: 85%;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.3rem;
  outline: none;
  border: 0.06rem solid var(--primary1);
  background-color: var(--secondary1);
  font-size: 0.8rem;
  text-indent: 0.3rem;
  &:focus {
    border: 0.06rem solid var(--primary1);
  }
  &::placeholder {
    opacity: 0.5;
    height: 100%;
    color: var(--primary1);
  }
`;

export const Button = styled.button`
  width: 10%;
  height: 100%;
  background-color: var(--primary1);
  color: var(--secondary1);
  font-size: 0.9rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary2);
    color: var(--primary1);
  }
  @media screen and (max-width: 1023px) {
    & {
      width: 15%;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      font-size: 0.7rem;
    }
  }
`;

export const CommentList = styled.div`
  position: absolute;
  top: 1rem;
  overflow: hidden;
  width: 100%;
  height: 11rem;
  .scroll-bar > div:last-of-type {
    display: none !important;
  }
`;

export const NoComment = styled.div`
  position: relative;
  top: 50%;
  font-size: 0.8rem;
  font-weight: 300;
  text-align: center;
`;

export const Comment = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-bottom: 0.7rem;
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.2;
  span {
    display: inline-block;
    &:nth-of-type(1) {
      width: 15%;
      height: 1.2rem;
      max-width: 15%;
      margin-right: 0.5rem;
      padding: 0 0.3rem;
      background-color: var(--primary1);
      color: var(--secondary1);
      line-height: 1.2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: var(--primary2);
        color: var(--primary1);
      }
      @media screen and (max-width: 767px) {
        & {
          width: 23%;
          max-width: 23%;
        }
      }
    }
    &:nth-of-type(2) {
      width: 85%;
      max-width: 85%;
      line-height: 1.2rem;
      text-align: justify;
      cursor: pointer;
      @media screen and (max-width: 767px) {
        & {
          width: 77%;
          max-width: 77%;
          padding-right: 0.8rem;
        }
      }
    }
  }
`;
