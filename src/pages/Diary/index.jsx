import { CalendarWrap, Container, DiaryWrap } from './styles';
import dayjs, { locale } from 'dayjs';
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
      <DiaryWrap>
        다이어리랩
        <div>{dayjs(value).format('YYYY-MM-DD')}</div>
      </DiaryWrap>
    </Container>
  );
};

export default Diary;
