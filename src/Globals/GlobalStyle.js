import { createGlobalStyle } from "styled-components";
import Satoshi from "../Assets/Fonts/Satoshi-Variable.ttf"

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url(${Satoshi}) format('truetype');
  }
`;

export default GlobalStyle;
