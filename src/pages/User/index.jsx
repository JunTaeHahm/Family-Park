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
  Collection,
  NoPost,
  UserTitle,
  DateSection,
  DateHeader,
  Loading,
} from './styles';
import PostList from '@components/PostList';
import { useGetAllPosts, useGetUserPosts } from '@hooks/usePost';
import Footer from '@layouts/Footer';
import { CircularProgress } from '@mui/material';
import { makeSection } from '@utils/makeScetion';
import axios from 'axios';
import React, { useCallback, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const menuRef = useRef(null);
  const params = useParams();

  const [loadUserName, setLoadUserName] = useState();
  const [loadUserTitle, setLoadUserTitle] = useState('');
  const [loadUserAvatar, setLoadUserAvatar] = useState('');
  const [isPostMenu, setIsPostMenu] = useState(true);

  const { allPosts, isLoading } = useGetAllPosts();
  const { userPosts: myPosts } = useGetUserPosts(params.user);
  const collectionPosts = allPosts
    ? [...allPosts].filter((post) => post.postLike.indexOf(params.user) !== -1)
    : [];
  const postSections = makeSection(myPosts ? [...myPosts] : []);

  axios
    .get(`/api/users/${encodeURI(params.user)}`)
    .then((res) => {
      if (res.data.userName && res.data.userTitle && res.data.userAvatar) {
        setLoadUserName(res.data.userName);
        setLoadUserTitle(res.data.userTitle);
        setLoadUserAvatar(res.data.userAvatar);
      }
    })
    .catch((error) => {
      console.log(error.response);
    });

  const onMyPostClick = useCallback(() => {
    menuRef.current.classList.remove('collection');
    setIsPostMenu(true);
  }, []);

  const onCollectionClick = useCallback(() => {
    menuRef.current.classList.add('collection');
    setIsPostMenu(false);
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
          <MenuWrap>
            <MyPost ref={menuRef} onClick={onMyPostClick}>
              포스트
            </MyPost>
            <Collection onClick={onCollectionClick}>컬렉션</Collection>
          </MenuWrap>
          <PostWrap>
            <List>
              {isPostMenu ? (
                myPosts.length === 0 ? (
                  <NoPost>작성한 포스트가 없습니다.</NoPost>
                ) : (
                  Object.entries(postSections).map(([date, posts]) => {
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
                  })
                )
              ) : collectionPosts.length === 0 ? (
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
