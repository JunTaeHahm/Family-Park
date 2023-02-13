import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * 전체 유저 정보 가져오는 함수
 * @returns data, allUsers, isLoading, error
 */
export const useAllUsers = () => {
  const {
    data: allUsers,
    isLoading,
    error,
  } = useQuery(
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
      manual: true,
      staleTime: 0,
      skip: true,
      cacheTime: Infinity, // 캐싱 시간
      refetchInterval: Infinity, // 5초 간격 리패치
    },
  );

  return { allUsers, isLoading, error };
};

/**
 * 클라이언트 유저 정보 가져오는 함수
 * @returns isAuth, role, userId, userName, userTitle, userAvatar, isLoading, error, refetch
 * isAuth: 인증상태
 * role: 어드민 여부
 * kakaoId: 카카오로그인의 경우 부여된 아이디
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
        .get(`/api/users`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    {
      manual: true,
      staleTime: 0,
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

  const avatar = Object(data).userAvatar;

  const role = Object(data).role;
  const kakaoId = Object(data).kakao_id;
  const userId = Object(data)._id;
  const userName = Object(data).userName;
  const userTitle = Object(data).userTitle;
  const userAvatar = avatar?.replace('http:', 'https:');

  return {
    isAuth,
    role,
    kakaoId,
    userId,
    userName,
    userTitle,
    userAvatar,
    isLoading,
    error,
    refetch,
  };
};
