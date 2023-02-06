import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h2`
  width: 100%;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 15rem;
`;

export const PostWrap = styled.div`
  width: 100%;
`;
