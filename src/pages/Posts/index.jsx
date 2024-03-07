import React, { useRef } from 'react';

import PullToRefresh from '@components/PulltoRefresh';
import PostMenu from '@layouts/PostMenu';

import { Container } from './styles';

const Posts = () => {
  const containerEl = useRef();

  return (
    <Container ref={containerEl}>
      <PullToRefresh el={containerEl} />
      <PostMenu />
    </Container>
  );
};

export default Posts;
