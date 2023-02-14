import React from 'react';

import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

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
        -webkit-border-radius: 0;
        -moz-border-radius: 0;
        border-radius: 0;
        color: var(--primary-black);
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
      }
      html,
      body,
      #root {
        overflow: scroll;
        height: 100%;
        font-family: 'IBM Sans KR', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--primary-black);
        background-color: var(--background);
        touch-action: manipulation;
        ::-webkit-scrollbar {
          display: none;
        }
      }
      #app {
        max-width: 1300px;
        height: 100%;
        min-height: 100%;
        margin: 0 auto;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: var(--primary-black);
      }

      /*===================================================
                              Font
      ===================================================*/
      @font-face {
        font-style: normal;
        font-weight: 300;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Light.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Light.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: 500;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Medium.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Medium.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: normal;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Regular.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: bold;
        font-family: 'IBM Sans KR';
        src: url(./src/assets/fonts/IBMSansKR-Bold.woff2) format('woff2'),
          url(./src/assets/fonts/IBMSansKR-Bold.woff) format('woff');
        font-display: swap;
      }

      @font-face {
        font-style: normal;
        font-weight: 300;
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Light.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Light.woff) format('woff');
        font-display: swap;
      }
      @font-face {
        font-style: normal;
        font-weight: normal;
        font-family: 'Montserrat';
        src: url(./src/assets/fonts/Montserrat-Regular.woff2) format('woff2'),
          url(./src/assets/fonts/Montserrat-Regular.woff) format('woff');
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
        --primary-skyblue: #E0EFFE;
        --primary-blue: #008BF8;
        --primary-white: #F8F9FA;
        --primary-grey: #C9C9C9;
        --primary-lightgrey: #DEDEDE;
        --background: #FBFDFC;

        --prism-code-1: #7C858D;
        --prism-code-2: #ABB2BF;
        --prism-code-3: #E06C75;
        --prism-code-4: #D19A66;
        --prism-code-5: #98C379;
        --prism-code-6: #56B6C2;
        --prism-code-7: #C678DD;
        --prism-code-8: #61AFEF;
        --prism-code-9: #C678DD;

        --neumorphic: 0.3rem 0.3rem 0.6rem #C8D0E7, -0.2rem -0.2rem 0.5rem var(--primary-white);
        --card: 0.13rem 0.13rem 0.6rem 0 rgba(0, 0, 0, 0.4);
      }
    `}
  />
);
export default GlobalStyle;
