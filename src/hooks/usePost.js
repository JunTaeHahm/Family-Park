import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
          console.log(error);
        });
    },
    {
      skip: true,
      cacheTime: Infinity,
      refetchInterval: Infinity,
    },
  );
  let allPosts = [];

  for (let key in data) {
    allPosts.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postDate: data[key].postDate,
      postUpdate: data[key].postUpdate,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
    });
  }
  return { allPosts, isLoading, error, refetch };
};

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
          console.log(error);
        });
    },
    {
      skip: true,
      cacheTime: Infinity,
      refetchInterval: Infinity,
    },
  );
  let recentPosts = [];

  for (let key in data) {
    recentPosts.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postDate: data[key].postDate,
      postUpdate: data[key].postUpdate,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
    });
  }
  return { recentPosts, isLoading, error, refetch };
};

export const useGetUserPosts = (userName) => {
  const { data, isLoading, error } = useQuery(
    ['userPosts'],
    async () => {
      return await axios
        .get(`/api/allposts/${userName}`)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    {
      skip: true,
      cacheTime: Infinity,
      refetchInterval: Infinity,
    },
  );
  let userPosts = [];
  for (let key in data) {
    userPosts.push({
      postId: data[key].postId,
      postContent: data[key].postContent,
      postUser: data[key].postUser,
      postDate: data[key].postDate,
      postUpdate: data[key].postUpdate,
      postLike: data[key].postLike,
      comments: data[key].comments,
      createdAt: data[key].createdAt,
    });
  }
  return { userPosts, isLoading, error };
};
