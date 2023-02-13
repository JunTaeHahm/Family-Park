import App from './App';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { urlBase64ToUint8Array } from '@utils/urlBase64toUnit8Array';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Workbox } from 'workbox-window';

const isDevelopment = process.env.NODE_ENV !== 'production';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* PWA */
if (!isDevelopment) {
  // 개발모드일 때 개발자 도구에서 SW Unregister하고 작업 할 것
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      /*===================================================
                      Work Box 사용
      ===================================================*/
      const wb = new Workbox('/sw.js');
      wb.addEventListener('installed', (event) => {
        if (!event.isUpdate) {
          console.log('Workbox가 설치 되었습니다.');
        }
      });

      wb.register();

      /*===================================================
                          SW 등록
      ===================================================*/
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW 등록 성공::', registration);

          const convertedVapidPublicKey = urlBase64ToUint8Array(process.env.WEBPUSH_PUBLIC_KEY);
          registration?.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidPublicKey,
          });
          Notification.requestPermission().then((p) => {
            console.log(p);
          });
        })
        .catch((error) => {
          console.log('SW 등록 실패:: ', error);
        });

      /*===================================================
                      SW 버전 확인
      ===================================================*/
      const getVersion = wb.messageSW({ type: 'GET_VERSION' });
      getVersion.then((res) => {
        console.log(`Service Worker Version:: ${res}`);
      });

      /*===================================================
              새로운 버전의 SW 업데이트 프롬프트
      ===================================================*/
      const showSkipWaitingPrompt = (event) => {
        // 유저가 업데이트를 수락할 경우, 대기 중이던 SW가 제어권을 얻음.
        wb.addEventListener('controlling', () => {
          // 이 시점에서 다시 로드하면 현재 탭이 새 SW의 제어 하에 로드됨.
          window.location.reload();
        });

        // 업데이트 수락 할 프롬프트
        Swal.fire({
          title: `새로운 업데이트가 있습니다.`,
          icon: 'info',
          confirmButtonColor: '#008bf8',
          confirmButtonText: '업데이트',
        }).then((result) => {
          // 업데이트 수락 시
          if (result.isConfirmed) {
            wb.messageSkipWaiting();
          }
        });
      };

      /*===================================================
          새로 등록 된 SW가 설치되었지만 활성화 대기 중인 시점을 탐지
      ===================================================*/
      wb.addEventListener('waiting', (event) => {
        showSkipWaitingPrompt(event);
      });
    });
  }
}

/* Axios 기본 설정 */
axios.defaults.withCredentials = true;
if (isDevelopment) {
  axios.defaults.baseURL = 'http://localhost:8000'; // 개발
} else {
  axios.defaults.baseURL = 'https://www.sentenceu.co.kr'; // 배포
}

/* React-Query 기본 설정 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 설정
    },
  },
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
);
