import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  html, body {
    font: 16px 'Poppins', 'Roboto', Helvetica, Arial, sans-serif;
  }

  :root {
    --orange: #FF553C;
    --white: #FFFFFF;
    --black: #121212;
  }

  @keyframes hamburger4animTop {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(45deg);
      opacity: 1;
    }
  }
  @keyframes hamburger4animBottom {
    0% {
      display: none;
    }
    1% {
      display: inline-block;
    }
    60% {
      transform: none;
      opacity: 0;
    }
    100% {
      transform: rotate(-45deg);
      opacity: 1;
    }
  }
}
`;