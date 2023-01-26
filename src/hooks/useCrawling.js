import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCrawling = () => {
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
          category: sayingCategories[Math.floor(Math.random() * 12)],
        })
        .then((res) => {
          if (res.data) return res.data;
        })
        .catch((error) => console.log(error));
    },
    {
      skip: true,
      cacheTime: Infinity, // 캐싱 시간
      refetchInterval: false, // 리패치시간
    },
  );

  let saying = [];
  let writer = [];
  if (data) {
    saying = [...data][0];
    writer = [...data][1];
  }

  return { saying, writer, isLoading, error };
};
