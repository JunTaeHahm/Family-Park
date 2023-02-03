import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        border: 0;
      }
      input,
      textarea,
      button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
      }
      html,
      body,
      #root {
        color: var(--primary1);
        background-color: var(--secondary2);
        height: 100%;
        font-family: 'IBM Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow: hidden;
        touch-action: manipulation;
        @media screen and (max-width: 768px) {
          & {
            overflow: scroll;
            ::-webkit-scrollbar {
              display: none;
            }
          }
        }
      }
      #app {
        height: 100%;
        min-height: 100%;
        max-width: 1920px;
        margin: 0 auto;
      }

      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: inherit;
      }

      @font-face {
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Light.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Light.woff) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Medium.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Medium.woff) format('woff');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Regular.woff) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Bold.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Bold.woff) format('woff');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Light.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Light.woff) format('woff');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Regular.woff) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @media screen and (min-width: 1020.3rem) {
        :root {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 1024px) {
        :root {
          font-size: 0.9rem;
        }
      }
      @media screen and (max-width: 768px) {
        :root {
          font-size: 0.8rem;
        }
      }

      :root {
        --card-shadow: 0.13rem 0.13rem 0.6rem 0 rgba(0, 0, 0, 0.4);
        --deactive: #c9c9c9;
        --primary1: #222;
        --primary2: #a0c3d2;
        --primary3: #83a2a1;
        --secondary1: #f8f9fa;
        --secondary2: #fbfdfc;
        --prism-code-1: #7c858d;
        --prism-code-2: #abb2bf;
        --prism-code-3: #e06c75;
        --prism-code-4: #d19a66;
        --prism-code-5: #98c379;
        --prism-code-6: #56b6c2;
        --prism-code-7: #c678dd;
        --prism-code-8: #61afef;
        --prism-code-9: #c678dd;
      }
    `}
  />
);
export default GlobalStyle;
