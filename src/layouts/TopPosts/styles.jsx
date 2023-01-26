import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    & {
      padding: 0;
    }
  }
`;
export const Loading = styled.div`
  width: 100%;
  height: 15rem; //todo
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
export const PostWrap = styled.div`
  width: 100%;
`;
