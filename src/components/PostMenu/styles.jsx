import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 2.5rem;
  margin-top: 1.5rem;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
`;

export const TopPostTitle = styled.div`
  position: relative;
  width: 9rem;
  height: 100%;
  max-width: 14rem;
  margin-left: 3.5rem;
  line-height: 2.5rem;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    display: block;
    width: 7rem;
    height: 0.3rem;
    border-radius: 0.6rem;
    background-color: var(--primary1);
    transform: translate(-50%, 0);
    transition: all 0.3s;
    transition: all 0.3s;
  }
  &.recent::after {
    transform: translate(5.5rem, 0);
  }
  @media screen and (max-width: 767px) {
    & {
      margin-left: 1.5rem;
    }
    &.recent::after {
      transform: translate(5.5rem, 0);
    }
  }
`;

export const RecentPostTitle = styled.div`
  width: 9rem;
  height: 100%;
  max-width: 14rem;
  line-height: 2.5rem;
`;

export const DotWrap = styled.div`
  position: absolute;
  right: 8%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 2.5rem;
`;

export const DotMenu = styled.ul`
  position: absolute;
  width: 8rem;
  padding: 0.5rem 0;
  border-radius: 0.6rem;
  background-color: var(--primary1);
  color: var(--secondary1);
  font-size: 0.9rem;
  box-shadow: var(--card-shadow);
  transform: ${(props) =>
    props.dotMenuOpen ? 'translate(-50%, 70%) scale(1)' : 'translate(-50%, 70%) scale(0)'};
  transform-origin: top right;
  transition: all 0.3s;
`;

export const MenuList = styled.li`
  width: 100%;
  padding: 0.4rem 0;
  text-align: center;
  transition: background-color 0.2s;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const PostWrap = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
`;
