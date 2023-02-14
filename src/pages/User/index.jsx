import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CircularProgress } from '@mui/material';
import axios from 'axios';

import PostList from '@components/PostList';
import { useGetAllPosts, useGetUserPosts } from '@hooks/usePost';
import { useGetClientUser } from '@hooks/userInfo';

import {
  Button,
  Collection,
  Container,
  List,
  Loading,
  MenuWrap,
  MyPost,
  NoPost,
  PostWrap,
  ProfileImage,
  ProfileName,
  ProfileWrap,
  UserInfo,
  UserPost,
  UserTitle,
} from './styles';

const User = () => {
  const params = useParams();

  const { allPosts, isLoading } = useGetAllPosts();
  const { userName } = useGetClientUser();
  const { userPosts, refetch } = useGetUserPosts(params.user);

  const [isPostMenu, setIsPostMenu] = useState('myPost');
  const [loadUserName, setLoadUserName] = useState();
  const [loadUserTitle, setLoadUserTitle] = useState('');
  const [loadUserAvatar, setLoadUserAvatar] = useState('');

  const collectionPosts = allPosts
    ? [...allPosts].filter((post) => post.postLike.indexOf(params.user) !== -1)
    : [];

  useEffect(() => {
    refetch(); // 해당 유저의 포스트만 보이도록 리패치
    axios
      .get(`/api/users/${encodeURI(params.user)}`)
      .then((res) => {
        if (res.data.userName && res.data.userTitle && res.data.userAvatar) {
          if (res.data.userName !== userName) {
            // 다른 유저의 페이지일 경우 포스트만 보이도록
            setLoadUserName(res.data.userName);
            setIsPostMenu('other');
          } else {
            setLoadUserName(res.data.userName);
          }
          setLoadUserTitle(res.data.userTitle);
          setLoadUserAvatar(res.data.userAvatar);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [refetch, params.user, userName]);

  /*============================================
                포스트 버튼 클릭
  ============================================*/
  const handleClickMyPost = () => {
    setIsPostMenu('myPost');
  };

  /*============================================
                컬렉션 버튼 클릭
  ============================================*/
  const handleClickCollection = () => {
    setIsPostMenu('collection');
  };

  if (!(loadUserName && loadUserAvatar)) return <Container>해당하는 유저가 없습니다.</Container>;

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
              <ProfileImage alt={loadUserName} src={loadUserAvatar.replace('http:', 'https:')} />
              <ProfileName>{loadUserName}</ProfileName>
            </UserInfo>
            <UserTitle>{loadUserTitle}</UserTitle>
          </ProfileWrap>

          {isPostMenu === 'other' ? (
            // 다른 유저의 페이지일 경우 포스트만 보이도록
            <MenuWrap>
              <UserPost className='fixed-bar'>
                <Button>포스트</Button>
              </UserPost>
            </MenuWrap>
          ) : (
            // 내 페이지일 경우 포스트/컬렉션 모두 보이도록
            <MenuWrap>
              <MyPost onClick={handleClickMyPost} className={isPostMenu === 'myPost' && 'active'}>
                <Button>내 포스트</Button>
              </MyPost>
              <Collection
                onClick={handleClickCollection}
                className={isPostMenu === 'collection' && 'active'}>
                <Button>컬렉션</Button>
              </Collection>
            </MenuWrap>
          )}

          <PostWrap>
            <List>
              {isPostMenu === 'collection' ? (
                collectionPosts.length === 0 ? (
                  <NoPost>컬렉션에 포스트가 없습니다.</NoPost>
                ) : (
                  collectionPosts.map((post) => (
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
                )
              ) : userPosts.length === 0 ? (
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

export default User;
