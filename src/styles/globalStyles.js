import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
    width: 98vw;
  }

  ul {
    display: flex;
    justify-content: center; 
    list-style: none; 

    padding: 0;
    margin: 0; 
  }

  li {
    cursor: pointer;
    border-bottom: 2px solid #009999;
    margin: 0 3rem;
    font-size: 1.2rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    
    &:hover { 
      border-bottom: 2px solid black;
      transition: border-bottom 0.4s ease;
    }
  }
  h2{
   span{
    font-size: 1.8rem;

   }
  }
  
`;

export default GlobalStyles;
