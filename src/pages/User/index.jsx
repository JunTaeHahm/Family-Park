import {
  Container,
  UserInfo,
  ProfileWrap,
  ProfileImage,
  ProfileName,
  PostWrap,
  List,
  MenuWrap,
  MyPost,
  Notice,
  Collection,
  NoPost,
  UserTitle,
  Loading,
} from './styles';
import PostList from '@components/PostList';
import { useGetAllPosts, useGetUserPosts } from '@hooks/usePost';
import Footer from '@layouts/Footer';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const menuRef = useRef(null);
  const params = useParams();

  const [loadUserName, setLoadUserName] = useState();
  const [loadUserTitle, setLoadUserTitle] = useState('');
  const [loadUserAvatar, setLoadUserAvatar] = useState('');
  const [isPostMenu, setIsPostMenu] = useState('myPost');

  const { allPosts, isLoading } = useGetAllPosts();
  const { userPosts: myPosts, refetch } = useGetUserPosts(params.user);
  const collectionPosts = allPosts
    ? [...allPosts].filter((post) => post.postLike.indexOf(params.user) !== -1)
    : [];

  useEffect(() => {
    refetch();
    axios
      .get(`/api/users/${encodeURI(params.user)}`)
      .then((res) => {
        if (res.data.userName && res.data.userTitle && res.data.userAvatar) {
          if (res.data.userName === '센텐스유') {
            setLoadUserName(res.data.userName);
            setIsPostMenu('admin');
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
  }, [refetch, params.user]);
  const onMyPostClick = useCallback(() => {
    menuRef.current.classList.remove('collection');
    setIsPostMenu('myPost');
  }, []);

  const onCollectionClick = useCallback(() => {
    menuRef.current.classList.add('collection');
    setIsPostMenu('collectionPost');
  }, []);

  if (isLoading)
    return (
      <Container>
        <Loading>
          <div>불러오는 중...</div>
          <CircularProgress color='inherit' />
        </Loading>
      </Container>
    );

  if (!(loadUserName && loadUserAvatar)) {
    return <Container>해당하는 유저가 없습니다.</Container>;
  } else {
    return (
      <>
        <Container>
          <ProfileWrap>
            <UserInfo>
              <ProfileImage alt={loadUserName} src={loadUserAvatar} />
              <ProfileName>{loadUserName}</ProfileName>
            </UserInfo>
            <UserTitle>{loadUserTitle}</UserTitle>
          </ProfileWrap>
          {isPostMenu === 'admin' ? (
            <MenuWrap>
              <Notice className='notice'>공지사항</Notice>
            </MenuWrap>
          ) : (
            <MenuWrap>
              <MyPost ref={menuRef} onClick={onMyPostClick}>
                포스트
              </MyPost>
              <Collection onClick={onCollectionClick}>컬렉션</Collection>
            </MenuWrap>
          )}
          <PostWrap>
            <List>
              {isPostMenu === 'collectionPost' ? (
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
              ) : myPosts.length === 0 ? (
                <NoPost>작성한 포스트가 없습니다.</NoPost>
              ) : (
                myPosts.map((post) => (
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
        <Footer />
      </>
    );
  }
};

export default User;
