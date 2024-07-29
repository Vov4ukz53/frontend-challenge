import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      height: 100%;
   }

   *,
   ::after,
   ::before {
      box-sizing: inherit;
   }

   body {
      font-family: "Josefin Sans", sans-serif;
      font-size: 18px;
   }
`;

export default GlobalStyle;