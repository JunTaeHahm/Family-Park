import dayjs from 'dayjs';
import 'dayjs/locale/ko.js';

dayjs.locale('ko');

export const makeSection = (postList) => {
  const sections = {};
  postList.forEach((post) => {
    const monthDate = dayjs(post.createdAt).format('MM월 DD일 ddd요일');
    if (Array.isArray(sections[monthDate])) {
      sections[monthDate]?.push(post);
    } else {
      sections[monthDate] = [post];
    }
  });

  return sections;
};
