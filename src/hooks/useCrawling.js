import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCrawling = () => {
  // 명언 카테고리 총 12개
  const sayingCategories = [
    'love',
    'life',
    'study',
    'success',
    'friend',
    'book',
    'parting',
    'time',
    'effort',
    'hope',
    'challenge',
    'confidence',
  ];
  const { data, isLoading, error } = useQuery(
    ['famousSaying'],
    async () => {
      return await axios
        .post(`/api/famous`, {
          category: sayingCategories[Math.floor(Math.random() * 12)], // 카테고리 12개 중에 랜덤 선택
        })
        .then((res) => {
          if (res.data) return res.data;
        })
        .catch((error) => console.log(error));
    },
    {
      manual: true,
      staleTime: 0,
      skip: true, // 한 번 데이터 가져오면 더 이상 가져오지 않음
      cacheTime: Infinity, // 캐싱 타임, 무한
      refetchInterval: false, // 리패치 반복 주기, 없음
    },
  );

  let saying = [];
  let writer = [];
  // data = [saying배열, writer배열]
  if (data) {
    saying.push([...data][0]);
    writer.push([...data][1]);
  }

  return { saying, writer, isLoading, error };
};
