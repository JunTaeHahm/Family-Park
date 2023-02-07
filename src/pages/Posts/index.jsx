import { Container } from './styles';
import { TopButton, WriteButton } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import loadable from '@loadable/component';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbArrowBigTop, TbPlus } from 'react-icons/tb';

const PostMenu = loadable(() => import('@layouts/PostMenu'));
const WriteModal = loadable(() => import('@components/WriteModal'));

const Posts = () => {
  const { userId, userName, userAvatar } = useGetClientUser();

  const [isBtnActive, setIsBtnActive] = useState(false);
  const [wirteModalOpen, setWirteModalOpen] = useState(false);

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

  // const scrollToTop = () => {
  //   window.scroll({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <Container>
      <PostMenu />

      {/* <TopButton isBtnActive={isBtnActive} onClick={scrollToTop}>
          <TbArrowBigTop />
        </TopButton> */}

      <WriteButton isBtnActive={isBtnActive} onClick={() => onWriteHandler()}>
        <TbPlus />
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

export default Posts;
