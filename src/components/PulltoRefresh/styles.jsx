import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1300px;
  height: 100%;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  transform: translate(0, -30px);
  span {
    width: 25px !important;
    height: 25px !important;
  }
`;
