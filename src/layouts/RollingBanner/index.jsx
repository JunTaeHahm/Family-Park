import { Container, List, Loading } from './styles';
import BannerList from '@components/BannerList';
import { useCrawling } from '@hooks/useCrawling';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

const RollingBanner = () => {
  const { saying, writer, isLoading } = useCrawling();

  if (isLoading) {
    return (
      <Container>
        <Loading>
          <CircularProgress color='inherit' />
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
