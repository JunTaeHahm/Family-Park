import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  padding: 2rem;
  gap: 2rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;
  width: 80%;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1366px) {
    & {
      width: 90%;
    }
  }
  @media screen and (max-width: 375px) {
    & {
      width: 100%;
    }
  }
`;

export const Image = styled.img`
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  width: 30%;
  max-height: 70%;
  object-fit: cover;
`;

export const Description = styled.div`
  font-family: var(--Mont-Rg);
  display: flex;
  flex-direction: column;
  p {
    line-height: 1.5;
  }
  b {
    font-weight: normal;
    background-color: aquamarine;
    padding: 0 0.1rem;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-family: var(--Mont-Bd);
`;

export const SubTitle = styled.span`
  color: var(--darkgray);
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const PS = styled.div`
  line-height: 1.5;
  padding: 0 0.3rem;
  background-color: aquamarine;
`;
