import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  backgroundColor: "#333",
  color: "white",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
img{
    width: 100%;
}
`;
