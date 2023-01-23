import { Container } from './Styles';
import dayjs from 'dayjs';
import React, { useState } from 'react';

const Time = () => {
  const [nowTime, setNowTime] = useState('');

  setInterval(() => {
    setNowTime(dayjs(Date.now()).format('YYYY-MM-DD HH:mm:ss'));
  }, 1000);

  return <Container>{nowTime}</Container>;
};

export default Time;
