import App from './App';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import InstallPWA from '@utils/installPWA';
import { urlBase64ToUint8Array } from '@utils/urlBase64toUnit8Array';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import PWAPrompt from 'react-ios-pwa-prompt';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window focus 설정
    },
  },
});

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     /*===================================================
//                           SW 등록
//     ===================================================*/
//     navigator.serviceWorker
//       .register('../service-worker.js')
//       .then((registration) => {
//         console.log('SW 등록 성공::', registration);

//         const convertedVapidPublicKey = urlBase64ToUint8Array(process.env.WEBPUSH_PUBLIC_KEY);
//         registration.pushManager.subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: convertedVapidPublicKey,
//         });
//         Notification.requestPermission().then((p) => {
//           console.log(p);
//         });
//       })
//       .catch((error) => {
//         console.log('SW 등록 실패:: ', error);
//       });
//   });
// }

axios.defaults.withCredentials = true;
if (process.env.NODE_ENV !== 'production') {
  axios.defaults.baseURL = 'http://localhost:8000'; // 개발
} else {
  axios.defaults.baseURL = 'https://www.sentenceu.co.kr'; // 배포
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
        <InstallPWA />
        <PWAPrompt
          copyTitle={'홈 화면에 추가'}
          copyBody={
            '이 웹사이트는 앱 기능이 있습니다. 홈 화면에 추가하여 전체 화면에서 오프라인 상태에서도 사용할 수 있습니다.'
          }
          copyShareButtonLabel={"1) '공유' 버튼을 누르세요."}
          copyAddHomeButtonLabel={"2) '홈 화면에 추가'를 누릅니다"}
          copyClosePrompt={'취소'}
          permanentlyHideOnDismiss={false}
          debug={true}
        />
        <Toaster
          position='top-center'
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
          }}
        />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
);
