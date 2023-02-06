import { Container, Loading, PostWrap, Title } from './styles';
import PostList from '@components/PostList';
import { useGetAllPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import React from 'react';

const TopPosts = () => {
  const { allPosts, isLoading } = useGetAllPosts();

  return (
    <Container>
      <Title>인기 포스트</Title>

      {isLoading ? (
        // 포스트 로딩 중
        <Loading>
          <CircularProgress color='inherit' />
          <div>불러오는 중...</div>
        </Loading>
      ) : (
        <PostWrap>
          {[...allPosts]
            .sort((a, b) => {
              return b.postLike.length - a.postLike.length;
            }) // 전체 포스트 중에 postLike의 개수 순으로 정렬
            .slice(0, 3) // postLike 제일 많은 세개만
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
      )}
    </Container>
  );
};

export default TopPosts;
