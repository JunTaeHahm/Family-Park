import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1024px;
  margin: 1.5rem auto 0;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      justify-content: flex-start;
      font-size: 1.1rem;
    }
  }
`;

export const TopPostTitle = styled.div`
  margin: 0 1rem 1rem;
  border-radius: 0.5rem;
  background: var(--primary-black);
  cursor: pointer;
  span.button-top.top-post {
    background-color: var(--primary-white);
  }
  @media screen and (max-width: 767px) {
    & {
      margin: 0 0.5rem 1rem 7.5%;
    }
  }
`;

export const RecentPostTitle = styled.div`
  margin: 0 1rem 1rem;
  border-radius: 0.5rem;
  background: var(--primary-black);
  cursor: pointer;
  span.button-top.recent-post {
    background-color: var(--primary-white);
  }
  @media screen and (max-width: 767px) {
    & {
      margin: 0 0.5rem 1rem;
    }
  }
`;

export const Button = styled.span`
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--primary-lightgrey);
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

export const More = styled.div`
  position: absolute;
  font-size: 1rem;
  right: 7.5%;
  top: 1.8rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const PostWrap = styled.div`
  width: 100%;
`;
