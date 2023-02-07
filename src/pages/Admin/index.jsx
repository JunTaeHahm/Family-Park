import PostList from '@components/PostList';
import Spinner from '@components/Spinner';
import { useGetUserPosts } from '@hooks/usePost';
import {
  Container,
  UserInfo,
  ProfileWrap,
  Button,
  ProfileImage,
  ProfileName,
  PostWrap,
  List,
  MenuWrap,
  UserPost,
  NoPost,
  UserTitle,
  Loading,
} from '@pages/User/styles';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  if (isLoading)
    // 포스트 로딩 중
    return (
      <Container>
        <Loading>
          <Spinner />
          <div>불러오는 중...</div>
        </Loading>
      </Container>
    );

  if (!(adminName && adminAvatar)) {
    // params의 유저가 없을 경우
    return <Container>해당하는 유저가 없습니다.</Container>;
  } else {
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
