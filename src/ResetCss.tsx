import { createGlobalStyle } from 'styled-components';
import backgroundImg from '../src/assets/background_img.svg';

const ResetCss = createGlobalStyle`
  :root {
    --background: #ffffff;
    --foreground: #171717;
	--background-img: url(${backgroundImg});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    max-width: 420px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
    min-height: 100vh;
    overflow-x: hidden;
    color: var(--foreground);
    background: var(--background) var(--background-img) no-repeat center center;
	background-size: 100% auto;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #494949;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #2E2E2E;
  }
`;

export default ResetCss;