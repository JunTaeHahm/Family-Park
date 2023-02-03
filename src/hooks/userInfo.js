import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useAllUsers = () => {
  const { data, isLoading, error } = useQuery(
    ['allUsers'],
    async () => {
      return await axios
        .get('/api/allusers')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    {
      skip: true,
      cacheTime: Infinity, // 캐싱 시간
      refetchInterval: Infinity, // 5초 간격 리패치
    },
  );

  let allUsers = [];
  for (let key in data) {
    allUsers?.push(data[key].userName);
  }
  return { data, allUsers, isLoading, error };
};

export const useGetClientUser = () => {
  const { data, isLoading, error, refetch } = useQuery(
    ['clientUser'],
    async () => {
      return await axios
        .get(`/api/users`, {
          withCredentials: true,
        })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    {
      skip: true,
      cacheTime: Infinity, // 캐싱 시간
      refetchInterval: false, // 리패치시간
    },
  );

  let isAuth;
  if (Object(data).isAuth === (null || undefined)) {
    isAuth = true;
  } else if (!Object(data).isAuth) {
    isAuth = false;
  }
  const role = Object(data).role;
  const userId = Object(data)._id;
  const userName = Object(data).userName;
  const userTitle = Object(data).userTitle;
  const userAvatar = Object(data).userAvatar;

  return { isAuth, userId, role, userName, userTitle, userAvatar, isLoading, error, refetch };
};
