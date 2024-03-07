import React, { useRef } from 'react';

import loadable from '@loadable/component';

import PullToRefresh from '@components/PulltoRefresh';

import { Container } from './styles';

const Intro = loadable(() => import('@layouts/Intro'));
const PostMenu = loadable(() => import('@layouts/PostMenu'));
const UserLists = loadable(() => import('@layouts/UserLists'));

const Home = () => {
  const containerEl = useRef();

  return (
    <Container ref={containerEl}>
      <PullToRefresh el={containerEl} />
      <Intro />
      <PostMenu slice={3} />
      <UserLists />
    </Container>
  );
};

export default Home;
