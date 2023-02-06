import { Container, Catuion, Main, LeftWrap, CenterWrap, RightWrap } from './styles';
import { WriteButton } from './styles';
import PostMenu from '@components/PostMenu';
import { useViewPort } from '@hooks/useViewPort';
import { useGetClientUser } from '@hooks/userInfo';
import loadable from '@loadable/component';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';

const Intro = loadable(() => import('@layouts/Intro'));
const Footer = loadable(() => import('@layouts/Footer'));
const RecentPosts = loadable(() => import('@layouts/RecentPosts'));
const UserLists = loadable(() => import('@layouts/UserLists'));
const WriteModal = loadable(() => import('@components/WriteModal'));
const TopPosts = loadable(() => import('@layouts/TopPosts'));

const Home = () => {
  const { innerWidth } = useViewPort();
  const { userId, userName, userAvatar } = useGetClientUser();

  const [wirteModalOpen, setWirteModalOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);

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

      <Catuion>
        <IoWarningOutline />
        &nbsp;개발 중인 서비스로 문제가 발생할 수 있어요 :&#40;
      </Catuion>

      <Main>
        <LeftWrap>
          <Intro />
          {innerWidth < 768 ? <PostMenu /> : <TopPosts />}
        </LeftWrap>

        {innerWidth < 768 ? (
          ''
        ) : (
          <CenterWrap>
            <RecentPosts />
          </CenterWrap>
        )}

        {innerWidth < 1024 ? (
          ''
        ) : (
          <RightWrap>
            <UserLists />
          </RightWrap>
        )}
      </Main>

      <Footer />

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
