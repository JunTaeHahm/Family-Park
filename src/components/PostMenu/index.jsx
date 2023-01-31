import { Container, DotMenu, PostWrap, RecentPostTitle, TopPostTitle } from './styles';
import RecentPosts from '@layouts/RecentPosts';
import TopPosts from '@layouts/TopPosts';
import React, { useRef, useState } from 'react';
import { useCallback } from 'react';
import { BsThreeDots } from 'react-icons/bs';

const PostMenu = () => {
  const ref = useRef();
  const [isPostMenu, setIsPostMenu] = useState(true);

  const onTopPostClick = useCallback(() => {
    ref.current.classList.remove('recent');
    setIsPostMenu(true);
  }, []);

  const onRecentPostClick = useCallback(() => {
    ref.current.classList.add('recent');
    setIsPostMenu(false);
  }, []);

  return (
    <Container>
      <TopPostTitle ref={ref} onClick={onTopPostClick}>
        인기 포스트
      </TopPostTitle>
      <RecentPostTitle onClick={onRecentPostClick}>최신 포스트</RecentPostTitle>
      <DotMenu>
        <BsThreeDots />
      </DotMenu>
      <PostWrap>{isPostMenu ? <TopPosts /> : <RecentPosts />}</PostWrap>
    </Container>
  );
};

export default PostMenu;
