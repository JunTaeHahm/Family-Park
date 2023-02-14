import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 1.5rem auto 0;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      justify-content: ${(props) => (props.path ? 'center' : 'flex-start')};
      font-size: 1.1rem;
    }
  }
`;

export const PS = styled.span`
  position: absolute;
  padding: 0 0.3rem;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  background-image: linear-gradient(120deg, #84FAB0 0%, #8FD3F4 100%);
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 100% 88%;
  transition: background-size 0.2s ease;
  &:hover {
    background-size: 100% 0.3rem;
  }
  @media screen and (max-width: 767px) {
    & {
      font-size: 1.2rem;
    }
  }
`;

export const TopPostTitle = styled.div`
  margin: ${(props) => (props.path ? '4rem 1rem 1rem' : '0rem 1rem 1rem')};
  border-radius: 0.5rem;
  background: var(--primary-black);
  cursor: pointer;
  span.button-top.top-post {
    background-color: var(--primary-white);
  }
  @media screen and (max-width: 767px) {
    & {
      margin: ${(props) => (props.path ? '3rem 0.5rem 1rem' : '0 0.5rem 1rem 7.5%')};
    }
  }
`;

export const RecentPostTitle = styled.div`
  margin: ${(props) => (props.path ? '4rem 1rem 1rem' : '0rem 1rem 1rem')};
  border-radius: 0.5rem;
  background: var(--primary-black);
  cursor: pointer;
  span.button-top.recent-post {
    background-color: var(--primary-white);
  }
  @media screen and (max-width: 767px) {
    & {
      margin: ${(props) => (props.path ? '3rem 0.5rem 1rem' : '0 0.5rem 1rem')};
    }
  }
`;

export const Button = styled.span`
  display: block;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  border: 2px solid var(--primary-black);
  border-radius: 0.5rem;
  color: var(--primary-black);
  background: var(--primary-lightgrey);
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
  top: 1.8rem;
  right: 7.5%;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const PostWrap = styled.div`
  width: 100%;
`;
