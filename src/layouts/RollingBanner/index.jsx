import { Container, List } from './styles';
import BannerList from '@components/BannerList';
import React from 'react';

const RollingBanner = ({ indexArray, sayingData }) => {
  return (
    <Container>
      <List>
        {indexArray.map((list, i) =>
          i < 20 ? <BannerList key={i} saying={sayingData[0][i]} writer={sayingData[1][i]} /> : '',
        )}
        {indexArray.map((list, i) =>
          i < 20 ? <BannerList key={i} saying={sayingData[0][i]} writer={sayingData[1][i]} /> : '',
        )}
      </List>
    </Container>
  );
};

export default RollingBanner;
