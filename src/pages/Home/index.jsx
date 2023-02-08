import { Container } from './styles';
import loadable from '@loadable/component';
import React from 'react';

const Intro = loadable(() => import('@layouts/Intro'));
const PostMenu = loadable(() => import('@layouts/PostMenu'));
const UserLists = loadable(() => import('@layouts/UserLists'));

const Home = () => {
  return (
    <Container>
      <Intro />
      <PostMenu slice={3} />
      <UserLists />
    </Container>
  );
};

export default Home;
