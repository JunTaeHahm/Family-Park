import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Loader = styled.div`
  transform: translate(0, -30px);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    width: 25px !important;
    height: 25px !important;
  }
`;
