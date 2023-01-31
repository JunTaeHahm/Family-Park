import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 2.5rem;
  width: 100%;
  font-family: var(--IMB-Md);
  font-size: 1.3rem;
  text-align: center;
  margin-top: 1.5rem;
`;

export const TopPostTitle = styled.div`
  position: relative;
  width: 30%;
  height: 100%;
  line-height: 2.5rem;
  transform: translate(-50%, 0);
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    transition: all 0.3s;
    display: block;
    width: 7rem;
    height: 0.3rem;
    border-radius: 0.6rem;
    background-color: var(--primary1);
    transition: all 0.3s;
  }
  &.recent::after {
    transform: translate(70%, 0);
  }
`;

export const RecentPostTitle = styled.div`
  width: 30%;
  transform: translate(-50%, 0);
  height: 100%;
  line-height: 2.5rem;
`;
export const DotMenu = styled.div`
  position: absolute;
  right: 8%;
  height: 100%;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export const PostWrap = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 100%;
`;
