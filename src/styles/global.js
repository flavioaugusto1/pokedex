import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Oxanium', cursive;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    background: rgb(131,236,229);
    background: linear-gradient(180deg, rgba(131,236,229,1) 26%, rgba(142,222,137,1) 74%);
  }
`;
