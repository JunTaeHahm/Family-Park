import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (userName) => {
  const [socket, setSocket] = useState();
  const [onlineList, setOnlineList] = useState([]);

  /* Socket.io 연결 */
  useEffect(() => {
    const API_SERVER =
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8000'
        : 'https://www.sentenceu.co.kr';
        
    // API_SERVER의 online에 소켓연결
    const socketIo = io.connect(`${API_SERVER}/online`, {
      path: '/socket.io',
      cors: { origin: '*', credentials: true }, // CORS 설정 (아래의 transports 설정 있으면 없어도 가능)
      transports: ['websocket'], // websocket만 사용하겠다는 설정
    });
    setSocket(socketIo); // 소켓 연결되면 따로 socket state에 다시 저장

    if (userName) {
      // userConnect연결 시 userName 요청 받음
      socketIo?.on('userConnect', () => {
        socketIo?.emit('login', { userName: userName }); // userName 서버로 보냄
      });
    }

    return () => {
      socketIo?.disconnect(); // 소켓에 연결 되고 데이터 보냈으면 연결 끊기 (서버에 연결 재시도 하는 것 방지)
      socketIo?.off('userConnect'); // 연결과 종료 반드시 작성 할 것 on-off
    };
  }, [userName]);

  /* 온라인 유저 리스트 받기 */
  useEffect(() => {
    socket?.on('onlineList', (data) => {
      // 배열에서 중복요소 제거해서 새로운 배열 생성
      const userArray = data.filter((ele, i) => {
        return data.indexOf(ele) === i;
      });
      // 새로운 배열 온라인리스트 state에 저장
      setOnlineList(userArray);
    });

    return () => {
      socket?.disconnect();
      socket?.off('onlineList');
    };
  }, [socket]);

  return { onlineList };
};
