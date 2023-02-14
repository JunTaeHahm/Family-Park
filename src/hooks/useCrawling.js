import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCrawling = () => {
  // 명언 카테고리:
  const sayingCategories = [
    'love', // 사랑
    'life', // 인생
    'study', // 공부
    'success', // 성공
    'friend', // 친구
    'book', // 독서
    'parting', // 이별
    'time', // 시간
    'effort', // 노력
    'hope', // 희망
    'challenge', // 도전
    'confidence', // 자신감
  ];
  const { data, isLoading, error } = useQuery(
    ['famousSaying'],
    async () => {
      return await axios
        .post(`/api/famous`, {
          // 카테고리 중 랜덤 선택:
          category: sayingCategories[Math.floor(Math.random() * 12)],
        })
        .then((res) => {
          if (res.data) return res.data;
        })
        .catch((error) => console.log(error));
    },
    {
      staleTime: Infinity,
      refetchInterval: false,
    },
  );
  let saying = data && [].concat(data[0]);
  let writer = data && [].concat(data[1]);

  return { saying, writer, isLoading, error };
};
