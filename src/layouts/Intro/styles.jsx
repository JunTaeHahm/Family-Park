import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem 1rem;
  gap: 3rem;
  @media screen and (max-width: 1023px) {
    & {
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      margin-bottom: 0;
      padding: 1.5rem 1.8rem 0;
      gap: 1rem;
    }
  }
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: var(--card);
  @media screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  img {
    width: 12rem;
    height: 100%;
    object-fit: scale-down;
    vertical-align: middle;
  }
  @media screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-size: 1.1rem;
  p {
    margin-top: 1.2rem;
    line-height: 1.3;
    letter-spacing: 0.03rem;
  }

  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      font-size: 1rem;
      p {
        margin-top: 0;
        line-height: 1.5;
      }
    }
  }
`;

export const PS = styled.span`
  padding: 0 0.3rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-size: 100% 88%;
  background-repeat: no-repeat;
  background-position: 0 50%;
  cursor: default;
  transition: background-size 0.2s ease;
  &:hover {
    background-size: 100% 0.3rem;
  }
  @media screen and (max-width: 767px) {
    & {
      order: -1;
      font-size: 1.2rem;
    }
  }
`;
