import { Container, Loading, PostWrap, Title } from './styles';
import PostList from '@components/PostList';
import { useGetAllPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import React from 'react';
import ReactPullToRefresh from 'react-pull-to-refresh';

const TopPosts = () => {
  const { allPosts, isLoading, refetch } = useGetAllPosts();

  const handleRefresh = async () => {
    await refetch();
  };

  return (
    <ReactPullToRefresh
      loading={
        <div className='loading'>
          <span className='loading-ptr-1'></span>
          <span className='loading-ptr-2'></span>
          <span className='loading-ptr-3'></span>
        </div>
      }
      onRefresh={handleRefresh}
      style={{ textAlign: 'center' }}>
      <Container>
        <Title>인기 포스트</Title>
        {isLoading ? (
          <Loading>
            <CircularProgress color='inherit' />
            <div>불러오는 중...</div>
          </Loading>
        ) : (
          <PostWrap>
            {[...allPosts]
              .sort((a, b) => {
                return b.postLike.length - a.postLike.length;
              })
              .slice(0, 3)
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
    </ReactPullToRefresh>
  );
};

export default TopPosts;
