import { Container, ListWrap, List, Title, Online } from './styles';
import { useSocket } from '@hooks/useSocket';
import { useAllUsers, useGetClientUser } from '@hooks/userInfo';
// import { useAllUsers } from '@hooks/userInfo';
import React from 'react';
import { Link } from 'react-router-dom';

const UserLists = () => {
  const { allUsers } = useAllUsers();
  const { userName } = useGetClientUser();
  const { onlineList } = useSocket(userName);

  // 온라인 유저가 맨 위에 위치하도록 배열 순서 바꾸기
  let onlineUsers = [];
  let offlineUsers = [];
  allUsers.forEach((user, i) => {
    if (onlineList.indexOf(user) !== -1) {
      onlineUsers.push(user);
    } else {
      offlineUsers.push(user);
    }
  });
  const sortedUsers = [...onlineUsers, ...offlineUsers.sort()];

  return (
    <Container>
      <Title>유저 목록</Title>
      <ListWrap>
        {sortedUsers.map((user, i) => {
          const isOnline = onlineList.indexOf(user);
          return (
            <List className={isOnline < 0 ? 'offline' : 'online'} key={i}>
              <Link to={`/${user}`}>{user}</Link>
            </List>
          );
        })}
      </ListWrap>
      <Online>접속 중</Online>
    </Container>
  );
};

export default UserLists;
