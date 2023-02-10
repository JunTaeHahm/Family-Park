/* eslint-disable no-restricted-globals */
import { skipWaiting, clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute, Route, NavigationRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { NetworkFirst, NetworkOnly } from 'workbox-strategies';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { Workbox } from 'workbox-window';

skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST); // 웹팩 빌드 시 필수

const wb = new Workbox('./service-worker.js');

const CACHE_NAME = 'version-1';
const urlsToCache = ['./index.html', './offline.html', './src'];

/*===================================================
                   SW 설치 및 캐싱
===================================================*/
self.addEventListener('install', (event) => {
  console.log('SW가 설치되었습니다.');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('캐싱이 완료되었습니다.');
      return cache.addAll(urlsToCache);
    }),
  );
});

/*===================================================
              window와 workbox간의 통신
===================================================*/
const SW_VERSION = '1.0.0';
self.addEventListener('message', (event) => {
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage(SW_VERSION);
  }
});

wb.register();

const swVersion = wb.messageSW({ type: 'GET_VERSION' });
console.log('Service Worker version:', swVersion);

/*===================================================
                런타임 동안 리소스 캐싱
===================================================*/
// 들어오는 동일 출처 이미지 요청과 일치하는 새 경로가 생성되어 먼저 캐시를 적용
const imageRoute = new Route(({ request, sameOrigin }) => {
  return sameOrigin && request.destination === 'image';
}, new CacheFirst());
// 새 경로 등록
registerRoute(imageRoute);

/*===================================================
              네트워크 요청 제한 시간 강제 적용
===================================================*/
// 요청한 페이지의 마지막 캐시된 버전을 리턴하기 전에 최대 3초 대기 후
// 제한 시간 초과 시 마지막으로 캐시된 버전을 리턴
const navigationRoute = new NavigationRoute(
  new NetworkFirst({
    networkTimeoutSeconds: 3,
    cacheName: 'navigations',
  }),
);
registerRoute(navigationRoute);

/*===================================================
        오프라인 혹은 네트워크 요청 제한 시간 강제 적용
===================================================*/
const FALLBACK_CACHE_NAME = 'offline-fallback'; // 오프라인 캐시 이름
const FALLBACK_HTML = './offline.html'; // 오프라인 폴백 html URL
// SW 설치 중에 html 폴백
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(FALLBACK_CACHE_NAME).then((cache) => cache.add(FALLBACK_HTML)));
});
// 오프라인 혹은 네트워크 요청 5초 초과 시 offline HTML파일 적용
const networkWithFallbackStrategy = new NetworkOnly({
  networkTimeoutSeconds: 5,
  plugins: [
    {
      handlerDidError: async () => {
        return await caches.match(FALLBACK_HTML, {
          cacheName: FALLBACK_CACHE_NAME,
        });
      },
    },
  ],
});
// 모든 탐색을 처리할 경로를 등록
registerRoute(new NavigationRoute(networkWithFallbackStrategy));

/*===================================================
                  SW 업데이트 처리
===================================================*/
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/*===================================================
                     SW 활성화
===================================================*/
wb.addEventListener('activated', (event) => {
  // event.isUpdate는 다른 버전의 SW가 이 버전을 등록할 때 페이지를 제어하고 있었다면 true
  if (!event.isUpdate) {
    console.log('SW가 최초 활성화되었습니다.');
  }
});
/*===================================================
                  새로운 SW 설치 후 대기
===================================================*/
wb.addEventListener('waiting', (event) => {
  console.log(
    '새 SW가 설치되었지만 현재 버전을 실행하는 모든 탭이 완전히 언로드될 때까지 활성화할 수 없습니다.',
  );
});
/*===================================================
                  새로운 SW 사용 가능 메시지
===================================================*/
wb.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_UPDATED') {
    const { updatedURL } = event.data.payload;

    console.log(`최신 버전의 ${updatedURL}을 사용 할 수 있습니다.`);
  }
});
/*===================================================
                  
===================================================*/
wb.addEventListener('activated', (event) => {
  // 현재 페이지 URL + 페이지에 로드된 모든 리소스를 가져오기
  const urlsToCache = [
    window.location.href,
    ...performance.getEntriesByType('resource').map((r) => r.name),
  ];
  // 해당 URL 목록을 SW의 라우터로 보내기
  wb.messageSW({
    type: 'CACHE_URLS',
    payload: { urlsToCache },
  });
});

wb.register();
