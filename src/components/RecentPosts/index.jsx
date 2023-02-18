import React from 'react';
import { useLocation } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import PostList from '@components/PostList';
import { useGetAllPosts } from '@hooks/usePost';
import { makeSection } from '@utils/makeScetion';

import { Container, DateHeader, DateSection, Loading, PostWrap } from './styles';

const RecentPosts = ({ slice }) => {
  const location = useLocation();
  const { allPosts, isLoading } = useGetAllPosts();

  // 날짜별로 섹션 생성하는데 postUser가 '센텐스유'인 포스트는 제외(공식 계정)
  const postSections = makeSection(
    allPosts ? [...allPosts].filter((v) => v.postUser !== '센텐스유').slice(0, slice) : [],
  );
  const path = location.pathname.split('/')[1] === 'posts';

  switch (isLoading) {
    case true:
      return (
        <Container>
          <Loading>
            <CircularProgress color='inherit' />
            <div>로딩중...</div>
          </Loading>
        </Container>
      );
    default:
      return (
        <Container>
          <PostWrap path={path} className='post-wrap'>
            {Object.entries(postSections).map(([date, posts]) => {
              // 섹션에서 date, posts로 1차 맵핑:
              return (
                // date에 있는 날짜로 2차 맵핑:
                <DateSection key={date}>
                  <DateHeader>
                    <button>{date}</button>
                  </DateHeader>

                  {posts.map((post) => (
                    // posts안에 있는 포스트 데이터 2차 맵핑:
                    <PostList
                      key={post.postId}
                      postId={post.postId}
                      postUser={post.postUser}
                      postContent={post.postContent}
                      postLike={post.postLike}
                      comments={post.comments}
                      createdAt={post.createdAt}
                      updatedAt={post.updatedAt}
                    />
                  ))}
                </DateSection>
              );
            })}
          </PostWrap>
        </Container>
      );
  }
};

export default RecentPosts;
