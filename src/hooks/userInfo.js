import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * 전체 유저 정보 가져오는 함수
 * @returns data, allUsers, isLoading, error
 */
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
  // Object에서 userName만 allUsers배열에 push
  for (let key in data) {
    allUsers?.push(data[key].userName);
  }

  return { data, allUsers, isLoading, error };
};

/**
 * 클라이언트 유저 정보 가져오는 함수
 * @returns isAuth, role, userId, userName, userTitle, userAvatar, isLoading, error, refetch
 * isAuth: 인증상태
 * role: 어드민 여부
 * userId: 유저아이디
 * userName: 유저명
 * userTitle: 유저타이틀
 * userAvatar: 유저아바타
 *
 */
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
    // res.data에 isAuth가 없으면 로그인 상태이므로 true 할당
    isAuth = true;
  } else if (!Object(data).isAuth) {
    isAuth = false;
  }

  const role = Object(data).role;
  const userId = Object(data)._id;
  const userName = Object(data).userName;
  const userTitle = Object(data).userTitle;
  const userAvatar = Object(data).userAvatar;

  return { isAuth, role, userId, userName, userTitle, userAvatar, isLoading, error, refetch };
};
