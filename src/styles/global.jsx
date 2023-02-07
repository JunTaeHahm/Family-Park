import { css, Global } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      /*===================================================
                              Reset
      ===================================================*/
      ${emotionNormalize}
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
      }
      input,
      textarea,
      button {
        border-radius: 0;
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
      html,
      body,
      #root {
        height: 100%;
        background-color: var(--background);
        color: var(--primary-black);
        font-family: 'IBM Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        touch-action: manipulation;
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      #app {
        height: 100%;
        min-height: 100%;
        max-width: 1300px;
        margin: 0 auto;
      }
      li {
        list-style: none;
      }
      a {
        color: inherit;
        text-decoration: none;
      }

      /*===================================================
                              Font
      ===================================================*/
      @font-face {
        font-family: 'IBM Sans KR';
        font-weight: 300;
        src: url(./src/assets/fonts/IBMSansKR-Light.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Light.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        font-weight: 500;
        src: url(./src/assets/fonts/IBMSansKR-Medium.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Medium.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        font-weight: normal;
        src: url(./src/assets/fonts/IBMSansKR-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Regular.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'IBM Sans KR';
        font-weight: bold;
        src: url(./src/assets/fonts/IBMSansKR-Bold.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Bold.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Montserrat';
        font-weight: 300;
        src: url(./src/assets/fonts/Montserrat-Light.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Light.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Montserrat';
        font-weight: normal;
        src: url(./src/assets/fonts/Montserrat-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Regular.woff) format('woff');
        font-style: normal;
        font-display: swap;
      }

      /*===================================================
                             root
      ===================================================*/
      @media screen and (min-width: 1024px) {
        :root {
          font-size: 16px;
        }
      }
      @media screen and (max-width: 1023px) {
        :root {
          font-size: 0.9rem;
        }
      }
      @media screen and (max-width: 767px) {
        :root {
          font-size: 0.8rem;
        }
      }

      :root {
        --primary-black: #222;
        --primary-skyblue: #e0effe;
        --primary-blue: #008bf8;
        --primary-white: #f8f9fa;
        --primary-grey: #c9c9c9;
        --primary-lightgrey: #dedede;
        --background: #fbfdfc;

        --prism-code-1: #7c858d;
        --prism-code-2: #abb2bf;
        --prism-code-3: #e06c75;
        --prism-code-4: #d19a66;
        --prism-code-5: #98c379;
        --prism-code-6: #56b6c2;
        --prism-code-7: #c678dd;
        --prism-code-8: #61afef;
        --prism-code-9: #c678dd;

        --neumorphic: 0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem var(--primary-white);
        --card: 0.13rem 0.13rem 0.6rem 0 rgba(0, 0, 0, 0.4);
      }
    `}
  />
);
export default GlobalStyle;
