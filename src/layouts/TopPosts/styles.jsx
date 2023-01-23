import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 30%;
  flex-direction: column;
  .loading-progress {
    position: absolute;
    top: 50%;
    transform: translate(-50%, 0);
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  margin: 1rem 0;
`;

export const PostWrap = styled.div`
  width: 100%;
  max-height: max-content;
`;
