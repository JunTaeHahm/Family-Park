import { Container, ListWrap, List, Title, Online } from './styles';
import { useSocket } from '@hooks/useSocket';
import React from 'react';
import { Link } from 'react-router-dom';

const UserLists = () => {
  const { onlineList, sortedUsers } = useSocket();

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
