import { Container } from './styles';
import {
  NoticePopup,
  NoticeWrap,
  NoticeDate,
  NoticeTitle,
  NoticeList,
  WriteButton,
} from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import loadable from '@loadable/component';
import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const Intro = loadable(() => import('@layouts/Intro'));
const PostMenu = loadable(() => import('@layouts/PostMenu'));
const UserLists = loadable(() => import('@layouts/UserLists'));
const WriteModal = loadable(() => import('@components/WriteModal'));

const Home = () => {
  const { userId, userName, userAvatar } = useGetClientUser();

  const [showPopup, setShowPopup] = useState(true);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [wirteModalOpen, setWirteModalOpen] = useState(false);

  /* 공지사항 팝업 */
  useEffect(() => {
    const shouldShow = localStorage.getItem('showPopup') !== 'false';
    setShowPopup(shouldShow);
  }, []);

  /* 팝업 닫기 */
  const closePopupHandler = () => {
    setShowPopup(false);
    localStorage.setItem('showPopup', false);
  };

  /* 글 작성 모달 버튼 클릭 시 */
  const onWriteHandler = useCallback(() => {
    if (userName) {
      // 로그인 상태에만 이용 가능하도록
      setWirteModalOpen(true);
      setIsBtnActive(true);
    } else {
      toast.error('로그인 후 작성 가능합니다.');
    }
  }, [userName]);

  return (
    <Container>
      {showPopup && (
        <NoticePopup>
          <NoticeWrap>
            <NoticeTitle>📌 업데이트 📌</NoticeTitle>
            <NoticeDate>2023년 02월 07일</NoticeDate>
            <NoticeList>카카오 로그인 기능 추가</NoticeList>
            <NoticeList>이미지 업로드 기능 활성화</NoticeList>
            <button onClick={closePopupHandler}>Close</button>
          </NoticeWrap>
        </NoticePopup>
      )}
      <Intro />
      <PostMenu slice={3} />
      <UserLists />
      <WriteButton isBtnActive={isBtnActive} onClick={() => onWriteHandler()}>
        +
      </WriteButton>
      {wirteModalOpen && (
        <WriteModal
          userId={userId}
          userName={userName}
          userAvatar={userAvatar}
          setIsBtnActive={setIsBtnActive}
          wirteModalOpen={wirteModalOpen}
          setWirteModalOpen={setWirteModalOpen}
        />
      )}
    </Container>
  );
};

export default Home;
