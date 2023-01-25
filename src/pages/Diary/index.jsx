import { CalendarWrap, Container, DiaryWrap } from './styles';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { Calendar } from 'react-calendar';

const Diary = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Container>
      <CalendarWrap>
        <Calendar
          className='react-calendar'
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => dayjs(date).format('D')}
        />
      </CalendarWrap>
      <DiaryWrap>준비중입니다.</DiaryWrap>
    </Container>
  );
};

export default Diary;
