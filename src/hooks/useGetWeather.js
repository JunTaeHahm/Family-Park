import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';

export const useGetWeather = () => {
  let lat;
  let lon;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // 위치 가져오기 성공 시 경도,위도 저장
      lat = position.coords.latitude; // 경도
      lon = position.coords.longitude; // 위도
    });
  }, []);

  // API로 날씨 데이터 요청해서 쿼리에 저장 1분 주기 리패치
  const { data, isLoading, error } = useQuery(
    ['weather'],
    async () => {
      return await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`,
        )
        .then((res) => {
          return res.data;
        });
    },
    {
      refetchInterval: false,
    },
  );

  return { data, isLoading, error };
};
