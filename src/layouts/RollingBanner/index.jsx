import React from 'react';

import BannerList from '@components/BannerList';
import { useCrawling } from '@hooks/useCrawling';

import { Container, List, Loading } from './styles';

const RollingBanner = () => {
  const { saying, writer, isLoading } = useCrawling();

  switch (isLoading) {
    case true:
      return (
        <Container>
          <Loading>
            <span>로딩중...</span>
          </Loading>
        </Container>
      );

    default:
      return (
        <Container isLoading={isLoading}>
          <List>
            {saying.map((list, i) => (
              <BannerList key={i} saying={saying[i]} writer={writer[i]} />
            ))}
          </List>
        </Container>
      );
  }
};

export default RollingBanner;
