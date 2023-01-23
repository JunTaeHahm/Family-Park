import App from './App';
import GlobalStyle from '@styles/global';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
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
        <Toaster
          position='bottom-center'
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,

            success: {
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
            Error: {
              theme: {
                primary: 'red',
                secondary: 'black',
              },
            },
            Loading: {
              theme: {
                primary: 'black',
                secondary: 'black',
              },
            },
          }}
        />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
);
