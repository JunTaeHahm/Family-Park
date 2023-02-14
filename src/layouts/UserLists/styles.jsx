import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;
  padding-top: 4rem;
  @media screen and (max-width: 1023px) {
    & {
      gap: 1.2rem;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      gap: 1rem;
      margin-top: 1rem;
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

export const Title = styled.span`
  position: absolute;
  top: 0;
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
  cursor: default;
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

export const Online = styled.span`
  position: absolute;
  top: 2rem;
  right: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-image: linear-gradient(120deg, #84FAB0 0%, #8FD3F4 100%);
  }
  @media screen and (max-width: 1023px) {
    & {
      right: 1.5rem;
    }
  }
  @media screen and (max-width: 767px) {
    & {
      right: 2.5rem;
    }
  }
`;
