import { Container, PS, Button, More, PostWrap, RecentPostTitle, TopPostTitle } from './styles';
import loadable from '@loadable/component';
import React, { useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RecentPosts = loadable(() => import('@components/RecentPosts'));
const TopPosts = loadable(() => import('@components/TopPosts'));

const PostMenu = ({ slice }) => {
  const postMenuRef = useRef();
  const location = useLocation();

  const path = location.pathname.split('/')[1] === 'posts';

  const [isPostMenu, setIsPostMenu] = useState(true); // true: 인기포스트, false: 최신포스트

  /* 인기포스트 클릭 함수 */
  const onTopPostClick = useCallback(() => {
    postMenuRef.current.classList.remove('recent');
    setIsPostMenu(true);
  }, []);

  /* 최신포스트 클릭 함수 */
  const onRecentPostClick = useCallback(() => {
    postMenuRef.current.classList.add('recent');
    setIsPostMenu(false);
  }, []);

  return (
    <Container path={path}>
      {path && <PS>여러분의 한 마디로 이 공간을 아름답게 빛내주세요.</PS>}

      <TopPostTitle path={path} ref={postMenuRef} onClick={onTopPostClick}>
        <Button className={isPostMenu ? 'button-top top-post' : 'button-top'}>인기 포스트</Button>
      </TopPostTitle>
      <RecentPostTitle path={path} onClick={onRecentPostClick}>
        <Button className={isPostMenu ? 'button-top' : 'button-top recent-post'}>
          최신 포스트
        </Button>
      </RecentPostTitle>

      <More>{path || <Link to='/posts'>더 보기</Link>}</More>

      <PostWrap isPostMenu={isPostMenu}>
        {isPostMenu ? <TopPosts slice={path ? 10 : 3} /> : <RecentPosts slice={slice} />}
      </PostWrap>
    </Container>
  );
};

export default PostMenu;
