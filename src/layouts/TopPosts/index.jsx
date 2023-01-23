import { Container, PostWrap, Title } from './styles';
import PostList from '@components/PostList';
import { useGetAllPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import React from 'react';

const TopPosts = () => {
  const { allPosts, isLoading } = useGetAllPosts();
  const topPostsArr = allPosts
    ? [...allPosts]
        .sort((a, b) => {
          return b.postLike.length - a.postLike.length;
        })
        .slice(0, 3)
    : [];

  return (
    <Container>
      <Title>인기 포스트</Title>
      {isLoading ? (
        <CircularProgress className='loading-progress' />
      ) : (
        <PostWrap>
          {topPostsArr.map((post) => (
            <PostList
              key={post.postId}
              postId={post.postId}
              postTitle={post.postTitle}
              postUser={post.postUser}
              postDate={post.postDate}
              postUpdateDate={post.postUpdateDate}
              postLike={post.postLike}
            />
          ))}
        </PostWrap>
      )}
    </Container>
  );
};

export default TopPosts;
