import { Container, ListWrap, List, Title, Online } from './styles';
import { useSocket } from '@hooks/useSocket';
import { useViewPort } from '@hooks/useViewPort';
import { useAllUsers, useGetClientUser } from '@hooks/userInfo';
// import { useAllUsers } from '@hooks/userInfo';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const UserLists = ({ userListOpen, setUserListOpen }) => {
  const ref = useRef();
  const { allUsers } = useAllUsers();
  const { userName } = useGetClientUser();
  const { onlineList } = useSocket(userName);
  const { innerWidth } = useViewPort();

  // 온라인 유저가 맨 위에 위치하도록 배열 순서 바꾸기
  let onlineUsers = [];
  let offlineUsers = [];
  allUsers.forEach((user, i) => {
    if (onlineList.indexOf(user) !== -1) {
      onlineUsers?.push(user);
    } else {
      offlineUsers?.push(user);
    }
  });
  const sortedUsers = [...onlineUsers, ...offlineUsers.sort()].filter((v) => v !== '센텐스유');

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      innerWidth < 768 && setUserListOpen(false);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, setUserListOpen, innerWidth]);

  return (
    <Container userListOpen={userListOpen}>
      <Title>유저목록</Title>
      <ListWrap ref={ref}>
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
