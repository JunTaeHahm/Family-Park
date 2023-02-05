import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      display: none;
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
