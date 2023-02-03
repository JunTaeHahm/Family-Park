import { Container, PostWrap, Title, DateHeader, DateSection, Loading } from './styles';
import PostList from '@components/PostList';
import { useGetRecentPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import { makeSection } from '@utils/makeScetion';
import React from 'react';

const RecentPosts = () => {
  const { recentPosts, isLoading } = useGetRecentPosts();
  const postSections = makeSection(
    recentPosts ? [...recentPosts].filter((v) => v.postUser !== '센텐스유') : [],
  );

  return (
    <Container>
      <Title>최신 포스트</Title>
      {isLoading ? (
        <Loading>
          <div>불러오는 중...</div>
          <CircularProgress color='inherit' />
        </Loading>
      ) : (
        <PostWrap className='post-wrap'>
          {Object.entries(postSections).map(([date, posts]) => {
            return (
              <DateSection key={date}>
                <DateHeader>
                  <button>{date}</button>
                </DateHeader>
                {posts.map((post) => (
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
      )}
    </Container>
  );
};

export default RecentPosts;
