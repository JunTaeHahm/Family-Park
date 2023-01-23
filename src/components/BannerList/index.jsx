import { List, Saying, Writer } from './styles';
import React from 'react';

const BannerList = ({ saying, writer }) => {
  if (saying && writer) {
    return (
      <List>
        <Saying>{saying}</Saying>
        <Writer>{writer}</Writer>
      </List>
    );
  }
};

export default BannerList;
