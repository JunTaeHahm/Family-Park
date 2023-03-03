import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';

import { useGetAllPosts, useGetRecentPosts } from '@hooks/usePost';

import { Container, Loader } from './styles';

const PullToRefresh = ({ el }) => {
  const { refetch: allPostsRefetch } = useGetAllPosts();
  const { refetch: recentPostsRefetch } = useGetRecentPosts();

  const [refreshing, setRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  useEffect(() => {
    function handleTouchStart(event) {
      console.log('touchStart');
      setStartY(event.touches[0].clientY);
    }

    function handleTouchMove(event) {
      console.log('touchMove');
      const moveY = event.touches[0].clientY;
      const pullDistance = moveY - startY;

      if (pullDistance > 0) {
        event.preventDefault();

        if (pullDistance > 80) {
          el.current.style.transform = 'translate(0, 40px)';
          el.current.style.transition = '0.3s';
          setRefreshing(true);
        }
      }
    }

    function handleTouchEnd() {
      console.log('touchEnd');
      if (refreshing) {
        allPostsRefetch();
        recentPostsRefetch();
        setTimeout(() => {
          setRefreshing(false);
          el.current.style.transform = 'translate(0,0)';
        }, 1000);
      }
    }

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [refreshing, startY, allPostsRefetch, recentPostsRefetch, el]);

  return (
    <Container>
      <Loader>{refreshing ? <CircularProgress color='inherit' /> : ''}</Loader>
    </Container>
  );
};

export default PullToRefresh;
