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
      padding: 1.5rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const Image = styled.img`
  box-shadow: 0.13rem 0.13rem 0.6rem rgba(0, 0, 0, 0.4);
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

export const Description = styled.div`
  width: 60%;
  font-family: var(--Mont-Rg);
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.3;
    margin-top: 1.5rem;
  }
  b {
    font-weight: normal;
    background-color: aquamarine;
    padding: 0 0.2rem;
  }
  @media screen and (max-width: 768px) {
    & {
      width: 100%;
      p {
        margin-top: 0;
      }
    }
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-family: var(--Mont-Bd);
`;

export const SubTitle = styled.span`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const PS = styled.span`
  font-size: 1.1rem;
  line-height: 1.5;
  padding: 0 0.3rem;
  background-color: aquamarine;
  text-align: center;
  white-space: nowrap;
`;
