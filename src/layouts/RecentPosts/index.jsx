import { Container, PostWrap, Title, DateHeader, DateSection, Loading } from './styles';
import PostList from '@components/PostList';
import { useGetRecentPosts } from '@hooks/usePost';
import { CircularProgress } from '@mui/material';
import { makeSection } from '@utils/makeScetion';
import React from 'react';

const RecentPosts = () => {
  const { recentPosts, isLoading } = useGetRecentPosts();

  // 날짜별로 섹션 생성하는데 postUser가 '센텐스유'인 포스트는 제외(공식 계정)
  const postSections = makeSection(
    recentPosts ? [...recentPosts].filter((v) => v.postUser !== '센텐스유') : [],
  );

  return (
    <Container>
      <Title>최신 포스트</Title>

      {isLoading ? (
        // 포스트 로딩 중
        <Loading>
          <div>불러오는 중...</div>
          <CircularProgress color='inherit' />
        </Loading>
      ) : (
        <PostWrap className='post-wrap'>
          {Object.entries(postSections).map(([date, posts]) => {
            /* 섹션에서 date, posts로 1차 맵핑 */
            return (
              /* date에 있는 날짜로 2차 맵핑 */
              <DateSection key={date}>
                <DateHeader>
                  <button>{date}</button>
                </DateHeader>

                {posts.map((post) => (
                  /* posts안에 있는 포스트 데이터 2차 맵핑 */
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
