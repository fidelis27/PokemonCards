import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    letter-spacing:0.1px;
  }

  *:focus{
    outline:0;
  }

  html, body, #root{
    min-height:100%;
    position:relative;
    overflow-x:hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
    background:#FBFBFB;
    font:400 1rem Roboto;
  }

`;
