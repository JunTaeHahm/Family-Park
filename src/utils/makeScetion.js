import dayjs from 'dayjs';
import 'dayjs/locale/ko.js';

dayjs.locale('ko');

export const makeSection = (postList) => {
  const sections = {};

  postList.forEach((post) => {
    const monthDate = dayjs(post.createdAt).format('MM월 DD일 ddd요일'); // 포스트의 createdAt을 dayjs형식으로 포맷
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate]?.push(post);
    } else {
      sections[monthDate] = [post];
    }
  });

  return sections;
};
