import { Container, PostWrap, Title, DateHeader, DateSection } from './styles';
import PostList from '@components/PostList';
import { useGetRecentPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import { makeSection } from '@utils/makeScetion';
import React from 'react';

const RecentPosts = () => {
  const { recentPosts, isLoading } = useGetRecentPosts();
  const postSections = makeSection(recentPosts ? [...recentPosts] : []);

  return (
    <Container>
      <Title>최신 포스트</Title>
      {isLoading ? (
        <CircularProgress className='loading-progress' />
      ) : (
        <PostWrap>
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
                    postTitle={post.postTitle}
                    postUser={post.postUser}
                    postDate={post.postDate}
                    postUpdateDate={post.postUpdateDate}
                    postLike={post.postLike}
                    comments={post.comments}
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
