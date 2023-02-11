import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCrawling = () => {
  // 명언 카테고리:
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
          // 카테고리 중 랜덤 선택:
          category: sayingCategories[Math.floor(Math.random() * 12)],
        })
        .then((res) => {
          if (res.data) return res.data;
        })
        .catch((error) => console.log(error));
    },
    {
      manual: true,
      staleTime: 0,
      skip: true,
      cacheTime: Infinity,
      refetchInterval: false,
    },
  );
  let saying = data && [].concat(data[0]);
  let writer = data && [].concat(data[1]);

  return { saying, writer, isLoading, error };
};
