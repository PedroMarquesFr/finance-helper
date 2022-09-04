import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Roboto Mono', monospace;
  }
  body{
    background:${(props) => props.theme.colors.background};
    font-size:18px;  
    color:${(props) => props.theme.colors.text};
    position:relative;
    overflow: hidden;
    @media only screen and (max-width: 1200px) {
      & {
        overflow: unset;
      }
    }
    height:100vh;
  }
`;
