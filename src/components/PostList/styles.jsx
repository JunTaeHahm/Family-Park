import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 1.2rem 0;
  padding: 1.2rem 1.2rem 1rem;
  border: 0.13rem solid var(--primary-grey);
  border-radius: 0.5rem;
  background-color: var(--primary-white);
  cursor: pointer;
  transform: translate(-50%, 0) scaleY(1);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }
  &.open {
    height: max-content;
    transition: all 0.5s;
  }
  &.removed {
    position: absolute;
    opacity: 0;
    transform: translate(-500%, 0);
  }
`;

export const PostWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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
  border-style: none;
  border-color: transparent;
  outline: none;
`;
export const EditInput = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 0.06rem solid var(--primary-skyblue);
  border-radius: 0.3rem;
  font-size: 1.1rem;
  background-color: var(--primary-white);
  outline: none;
  resize: none;
  &::placeholder {
    height: 100%;
    font-size: 1.3rem;
    color: var(--primary-black);
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
  font-weight: normal;
  font-size: 0.9rem;
  color: var(--primary-white);
  background-color: var(--primary-black);
  transition: all 0.2s;
  &:hover {
    color: var(--primary-black);
    background-color: var(--primary-skyblue);
  }
`;
export const PostAction = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  font-weight: 300;
  font-size: 0.8rem;
  transform: translate(-50%, 0);
  & span {
    margin-left: 0.5rem;
    cursor: pointer;
    &:first-of-type {
      color: var(--primary-black);
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
