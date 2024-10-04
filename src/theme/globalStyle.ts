import { createGlobalStyle } from "styled-components";
import InterRegular from "fonts/Inter/Inter-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: local('Inter'), url(${InterRegular}) format('truetype');
  }


  body {
    background-color: grey;
    color: white;
    font-family: Inter;
  }
`;

export default GlobalStyles;
