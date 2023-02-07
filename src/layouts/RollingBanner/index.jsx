import { Container, List, Loading } from './styles';
import BannerList from '@components/BannerList';
import { useCrawling } from '@hooks/useCrawling';
import React from 'react';

const RollingBanner = () => {
  const { saying, writer, isLoading } = useCrawling();

  /* 명언 크롤링 로딩 시 */
  if (isLoading) {
    return (
      <Container>
        <Loading>
          <span>불러오는 중...</span>
        </Loading>
      </Container>
    );
  }

  return (
    <Container isLoading={isLoading}>
      <List>
        {saying.map((list, i) => (
          <BannerList key={i} saying={saying[i]} writer={writer[i]} />
        ))}
      </List>
    </Container>
  );
};

export default RollingBanner;
