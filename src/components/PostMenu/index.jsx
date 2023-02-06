import {
  Container,
  DotWrap,
  DotMenu,
  MenuList,
  PostWrap,
  RecentPostTitle,
  TopPostTitle,
} from './styles';
import useClickOutsideModal from '@hooks/useClickOutsideModal';
import RecentPosts from '@layouts/RecentPosts';
import TopPosts from '@layouts/TopPosts';
import UserLists from '@layouts/UserLists';
import React, { useRef, useState } from 'react';
import { useCallback } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const PostMenu = () => {
  const postMenuRef = useRef();
  const dotMenuRef = useRef();

  const [isPostMenu, setIsPostMenu] = useState(true); // true: 인기포스트, false: 최신포스트
  const [userListOpen, setUserListOpen] = useState(false);
  const [dotMenuOpen, setDotMenuOpen] = useState(false);

  /* 인기포스트 클릭 함수 */
  const onTopPostClick = useCallback(() => {
    postMenuRef.current.classList.remove('recent');
    setIsPostMenu(true);
  }, []);

  /* 최신포스트 클릭 함수 */
  const onRecentPostClick = useCallback(() => {
    postMenuRef.current.classList.add('recent');
    setIsPostMenu(false);
  }, []);

  /* 점메뉴 클릭 시 Open state 변경 함수 */
  const onTouchStartDotMenu = () => {
    setDotMenuOpen((prev) => !prev);
  };

  /* 점메뉴 리스트 밖 클릭 시 점메뉴 닫히는 함수 */
  useClickOutsideModal(dotMenuRef, () => {
    setDotMenuOpen(false);
  });

  /* UserList 클릭 함수 */
  const onUserListClick = () => {
    setUserListOpen(true);
    setDotMenuOpen(false);
  };

  return (
    <Container>

      <TopPostTitle ref={postMenuRef} onClick={onTopPostClick}>
        인기 포스트
      </TopPostTitle>
      <RecentPostTitle onClick={onRecentPostClick}>최신 포스트</RecentPostTitle>

      <DotWrap ref={dotMenuRef}>
        <BsThreeDots onTouchStart={onTouchStartDotMenu} />
        <DotMenu dotMenuOpen={dotMenuOpen}>
          <MenuList>
            <Link to={`/센텐스유`}>공지사항</Link>
          </MenuList>
          <MenuList onClick={onUserListClick}>유저목록</MenuList>
        </DotMenu>
      </DotWrap>
      
      <PostWrap isPostMenu={isPostMenu}>{isPostMenu ? <TopPosts /> : <RecentPosts />}</PostWrap>

      {userListOpen ? (
        <UserLists userListOpen={userListOpen} setUserListOpen={setUserListOpen} />
      ) : (
        ''
      )}
      
    </Container>
  );
};

export default PostMenu;
