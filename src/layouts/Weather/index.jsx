import { Container } from './style';
import { useGetWeather } from '@hooks/useGetWeather';
import React from 'react';

const Weather = () => {
  const { data, isLoading, error } = useGetWeather();

  console.log(data);
  const weather = data?.weather[data?.weather.length - 1];
  const weatherSrc = `http://openweathermap.org/img/wn/${weather?.icon}@2x.png`;

  if (isLoading) {
    return <Container>날씨 로딩중...</Container>;
  } else {
    return (
      <Container>
        <div>현재 위치 : {data?.name}</div>
        <div>현재 온도 : {Math.floor(data?.main.temp)} &#176;C</div>
        <div>최저 온도 : {data?.main.temp_min}</div>
        <div>최고 온도 : {data?.main.temp_max}</div>
        <div>{data?.main.temp}{weather?.main}</div>
        <img src={weatherSrc} alt='' />
      </Container>
    );
  }
};

export default Weather;
         