import { Container, WriteButton } from './styles';
import WriteModal from '@components/WriteModal';
import { useGetClientUser } from '@hooks/userInfo';
import PostMenu from '@layouts/PostMenu';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbPlus } from 'react-icons/tb';

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

  return (
    <Container>
      <PostMenu />

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
