import styled from '@emotion/styled';

export const List = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin: 0 1rem;
`;
export const Saying = styled.div`
  font-size: 16px;
  @media screen and (max-width: 768px) {
    & {
      font-size: 14px;
    }
  }
`;
export const Writer = styled.div`
  color: var(--darkgray);
  font-size: 14px;
  @media screen and (max-width: 768px) {
    & {
      font-size: 12px;
    }
  }
`;
