import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    background-color: black;
    color:white;
}
ul{
    display: flex;
    list-style: none;
    li{
        padding: 10px;
    }
    a{
        color:white;
        text-decoration: none;
        font-weight: 600;
    }
}

`