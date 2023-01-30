import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (userName) => {
  const [socket, setSocket] = useState();
  const [onlineList, setOnlineList] = useState([]);

  useEffect(() => {
    const socketIo = io.connect(`${process.env.API_SERVER}/online`, {
      path: '/socket.io',
      cors: { origin: '*', credentials: true },
      transports: ['websocket'],
    });
    setSocket(socketIo); // 소켓 연결되면 따로 socket에 다시 저장

    if (userName) {
      socketIo?.on('userConnect', () => {
        socketIo?.emit('login', { userName: userName }); // 유저명 보냄
      });
    }

    return () => {
      socketIo?.disconnect(); // 이 코드 없으면 서버에 연결 많이 시도함
      socketIo?.off('userConnect');
    };
  }, [userName]);

  useEffect(() => {
    // 서버에서 온라인 리스트 배열로 받음
    socket?.on('onlineList', (data) => {
      // 배열에서 중복요소 제거해서 새로운 배열 생성
      const userArray = data.filter((ele, i) => {
        return data.indexOf(ele) === i;
      });
      // 새로운 배열 온라인리스트 state에 저장
      setOnlineList(userArray);
    });
    // 소켓 한 번 연결 됐으면 연결 끊기
    return () => {
      socket?.disconnect();
      socket?.off('onlineList');
    };
  }, [socket]);

  return { onlineList };
};
