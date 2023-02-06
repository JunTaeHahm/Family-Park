import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  gap: 2rem;
  @media screen and (max-width: 1023px) {
    & {
      margin-bottom: 2.5rem;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & {
      flex-wrap: nowrap;
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
  box-shadow: var(--card-shadow);
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
  width: 60%;
  p {
    margin-top: 1.2rem;
    line-height: 1.3;
    letter-spacing: 0.03rem;
  }
  b {
    padding: 0 0.2rem;
    background-color: var(--primary2);
    font-weight: normal;
  }
  @media screen and (max-width: 767px) {
    & {
      width: 100%;
      p {
        margin-top: 0;
        line-height: 1.5;
      }
    }
  }
`;

export const PS = styled.span`
  padding: 0 0.3rem;
  background-color: var(--primary2);
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    & {
      position: absolute;
      bottom: -1rem;
    }
  }
`;
