import React, { useEffect, useState } from 'react';

import { CircularProgress } from '@mui/material';
import {
  Button,
  Container,
  List,
  Loading,
  MenuWrap,
  NoPost,
  PostWrap,
  ProfileImage,
  ProfileName,
  ProfileWrap,
  UserInfo,
  UserPost,
  UserTitle,
} from '@pages/User/styles';
import axios from 'axios';

import PostList from '@components/PostList';
import { useGetUserPosts } from '@hooks/usePost';

const Admin = () => {
  const { userPosts, isLoading, refetch } = useGetUserPosts('센텐스유');

  const [adminName, setAdminName] = useState();
  const [adminTitle, setAdminTitle] = useState('');
  const [adminAvatar, setAdminAvatar] = useState('');

  useEffect(() => {
    refetch();
    axios
      .get(`/api/users/${encodeURI('센텐스유')}`)
      .then((res) => {
        if (res.data.userName && res.data.userTitle && res.data.userAvatar) {
          setAdminName(res.data.userName);
          setAdminTitle(res.data.userTitle);
          setAdminAvatar(res.data.userAvatar);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [refetch]);

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
          <ProfileWrap>
            <UserInfo>
              <ProfileImage alt={adminName} src={adminAvatar} />
              <ProfileName>{adminName}</ProfileName>
            </UserInfo>
            <UserTitle>{adminTitle}</UserTitle>
          </ProfileWrap>

          <MenuWrap>
            <UserPost className='fixed-bar'>
              <Button>공지사항</Button>
            </UserPost>
          </MenuWrap>

          <PostWrap>
            <List>
              {userPosts.length === 0 ? (
                <NoPost>작성한 포스트가 없습니다.</NoPost>
              ) : (
                userPosts.map((post) => (
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
                ))
              )}
            </List>
          </PostWrap>
        </Container>
      );
  }
};

export default Admin;
