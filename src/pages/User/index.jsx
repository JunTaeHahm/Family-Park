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
} from './style';
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

  const [loadUserName, setLoadUserName] = useState('');
  const [loadUserImage, setLoadUserImage] = useState('');
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
      if (res.data.userName && res.data.userImage) {
        setLoadUserName(res.data.userName);
        setLoadUserImage(res.data.userImage);
      }
    })
    .catch((error) => {
      console.log(error.response);
    });

  const onMenuClick = useCallback(() => {
    if (menuRef.current.classList.contains('collection')) {
      menuRef.current.classList.remove('collection');
      setIsPostMenu(true);
    } else {
      menuRef.current.classList.add('collection');
      setIsPostMenu(false);
    }
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
  if (!(loadUserName && loadUserImage)) {
    return <Container>해당하는 유저가 없습니다.</Container>;
  } else {
    return (
      <>
        <Container>
          <ProfileWrap>
            <UserInfo>
              <ProfileImage alt={loadUserName} src={loadUserImage} />
              <ProfileName>{loadUserName}</ProfileName>
            </UserInfo>
            <UserTitle>유저 타이틀</UserTitle>
          </ProfileWrap>
          <MenuWrap>
            <MyPost ref={menuRef} onClick={onMenuClick}>
              POST
            </MyPost>
            <Collection onClick={onMenuClick}>COLLECTION</Collection>
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
                  })
                )
              ) : collectionPosts.length === 0 ? (
                <NoPost>컬렉션에 포스트가 없습니다.</NoPost>
              ) : (
                collectionPosts.map((post) => (
                  <PostList
                    key={post.postId}
                    postId={post.postId}
                    postTitle={post.postTitle}
                    postUser={post.postUser}
                    postDate={post.postDate}
                    postUpdateDate={post.postUpdateDate}
                    postLike={post.postLike}
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
