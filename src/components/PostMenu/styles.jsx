import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 2.5rem;
  width: 100%;
  font-weight: 500;
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
export const DotWrap = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 10;
  right: 8%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export const DotMenu = styled.ul`
  font-size: 0.9rem;
  position: absolute;
  transition: all 0.3s;
  width: 8rem;
  box-shadow: var(--card-shadow);
  background-color: var(--primary1);
  color: var(--secondary1);
  transform-origin: top right;
  padding: 0.5rem 0;
  transform: ${(props) =>
    props.dotMenuOpen ? 'translate(-50%, 70%) scale(1)' : 'translate(-50%, 70%) scale(0)'};
  border-radius: 0.6rem;
`;

export const MenuList = styled.li`
  padding: 0.4rem 0;
  text-align: center;
  width: 100%;
  transition: background-color 0.2s;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const PostWrap = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 100%;
`;
