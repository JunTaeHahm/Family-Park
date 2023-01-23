import { Container, Main, LeftWrap, CenterWrap, RightWrap } from './styles';
import { WriteButton } from './styles';
import WriteModal from '@components/WriteModal';
import { useGetAllPosts } from '@hooks/usePost';
import { useGetClientUser } from '@hooks/userInfo';
import About from '@layouts/About';
import Footer from '@layouts/Footer';
import RecentPosts from '@layouts/RecentPosts';
import Time from '@layouts/Time';
import TopPosts from '@layouts/TopPosts';
import UserLists from '@layouts/UserLists';
import Weather from '@layouts/Weather';
import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Home = () => {
  const [wirteModalOpen, setWirteModalOpen] = useState(false);
  const [isBtnActive, setIsBtnActive] = useState(false);
  const { userName } = useGetClientUser();
  const { refetch } = useGetAllPosts();
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

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

  const handleRefetch = () => {
    refetch();
  };

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
            <Weather />
            <UserLists />
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
          onRefetch={handleRefetch}
          setIsBtnActive={setIsBtnActive}
          wirteModalOpen={wirteModalOpen}
          setWirteModalOpen={setWirteModalOpen}
        />
      )}
    </Container>
  );
};

export default Home;
