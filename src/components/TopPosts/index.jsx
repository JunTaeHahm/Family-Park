import React from 'react';

import { CircularProgress } from '@mui/material';

import PostList from '@components/PostList';
import { useGetRecentPosts } from '@hooks/usePost';

import { Container, Loading, PostWrap } from './styles';

const TopPosts = ({ slice }) => {
  const { recentPosts, isLoading } = useGetRecentPosts();

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
          <PostWrap>
            {[...recentPosts]
              .sort((a, b) => {
                return b.postLike.length - a.postLike.length;
              }) // 전체 포스트 중에 postLike의 개수 순으로 정렬
              .slice(0, slice)
              .map((post) => (
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
          </PostWrap>
        </Container>
      );
  }
};

export default TopPosts;
