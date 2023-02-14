import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

/**
 * 전체 포스트 가져오는 react-query 함수
 * @returns allPosts, isLoading, error, refetch
 */
export const useGetAllPosts = () => {
  const { data, isLoading, error, refetch } = useQuery(
    ['allPosts'],
    async () => {
      return await axios
        .get('/api/allposts')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    {
      staleTime: Infinity,
      refetchInterval: 60 * 1000,
    },
  );

  let allPosts = [];

  // Object의 모든 데이터의 key별로 allPosts배열에 push
  for (let key in data) {
    allPosts?.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
      updatedAt: data[key].updatedAt,
    });
  }

  return { allPosts, isLoading, error, refetch };
};

/**
 * 최근 포스트 가져오는 react-query 함수
 * @returns recentPosts, isLoading, error, refetch
 */
export const useGetRecentPosts = () => {
  const { data, isLoading, error, refetch } = useQuery(
    ['recentPosts'],
    async () => {
      return await axios
        .get('/api/posts/recent')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    {
      staleTime: Infinity,
      refetchInterval: 60 * 1000,
    },
  );

  let recentPosts = [];

  // Object의 모든 데이터의 key별로 recentPosts배열에 push
  for (let key in data) {
    recentPosts?.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
      updatedAt: data[key].updatedAt,
    });
  }

  return { recentPosts, isLoading, error, refetch };
};

/**
 * 특정 유저의 포스트 가져오는 react-query 함수
 * @returns userPosts, isLoading, error, refetch
 */
export const useGetUserPosts = (userName) => {
  const { data, isLoading, error, refetch } = useQuery(
    ['userPosts'],
    async () => {
      return await axios
        .get(`/api/allposts/${userName}`) // userName은 인수로 받음
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    {
      staleTime: Infinity,
      refetchInterval: false,
    },
  );

  let userPosts = [];

  // Object의 모든 데이터의 key별로 userPosts배열에 push
  for (let key in data) {
    userPosts?.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
      updatedAt: data[key].updatedAt,
    });
  }

  return { data, userPosts, isLoading, error, refetch };
};
