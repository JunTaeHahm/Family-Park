import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  flex-direction: column;

  display: flex;
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      padding: 1.5rem 1.8rem 0;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    & {
      gap: 1rem;
    }
  }
`;

export const Image = styled.img`
  box-shadow: var(--card-shadow);
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  img {
    width: 12rem;
    height: 100%;
    vertical-align: middle;
    object-fit: scale-down;
  }
  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

export const Description = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.3;
    margin-top: 1.2rem;
  }
  b {
    font-weight: normal;
    background-color: var(--primary2);
    padding: 0 0.2rem;
  }
  @media screen and (max-width: 768px) {
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
  font-size: 1.1rem;
  line-height: 1.5;
  padding: 0 0.3rem;
  background-color: var(--primary2);
  text-align: center;
  white-space: nowrap;
`;
