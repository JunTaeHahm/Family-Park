import { Container, Main, LeftWrap, CenterWrap, RightWrap } from './styles';
import { WriteButton } from './styles';
import { useGetClientUser } from '@hooks/userInfo';
import loadable from '@loadable/component';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const About = loadable(() => import('@layouts/About'));
const Footer = loadable(() => import('@layouts/Footer'));
const RecentPosts = loadable(() => import('@layouts/RecentPosts'));
const Time = loadable(() => import('@layouts/Time'));
const UserLists = loadable(() => import('@layouts/UserLists'));
const WriteModal = loadable(() => import('@components/WriteModal'));
const TopPosts = loadable(() => import('@layouts/TopPosts'));

const Home = () => {
  const [wirteModalOpen, setWirteModalOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { userId, userName, userImage } = useGetClientUser();

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, []);

  const onWriteHandler = useCallback(() => {
    if (userName) {
      setWirteModalOpen(true);
      setIsBtnActive(true);
    } else {
      toast.error('로그인 후 작성 가능합니다.');
    }
  }, [userName]);

  return (
    <Container>
      <Main>
        <LeftWrap>
          <About />
          <TopPosts />
        </LeftWrap>
        <CenterWrap>
          <RecentPosts />
        </CenterWrap>
        {innerWidth > 768 ? (
          <RightWrap>
            <Time />
            <UserLists />
            {/* <UserLists allUsers={allUsers} /> */}
          </RightWrap>
        ) : (
          ''
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
          userImage={userImage}
          setIsBtnActive={setIsBtnActive}
          wirteModalOpen={wirteModalOpen}
          setWirteModalOpen={setWirteModalOpen}
        />
      )}
    </Container>
  );
};

export default Home;
