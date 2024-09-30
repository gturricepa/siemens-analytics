import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%); /* Começa fora da tela à esquerda */
    opacity: 0; /* Totalmente transparente */
  }
  100% {
    transform: translateX(0); /* Termina na posição original */
    opacity: 1; /* Totalmente opaco */
  }
`;

export const Holder = styled.section`
  display: flex;
  margin-left: 0.5rem;
  margin-top: 1rem;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;

  h2 {
    margin-bottom: 3rem;
    svg {
      margin-right: 1rem;
    }
  }
  code {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    width: 98%;
    border-bottom: 1px solid #009999;
    padding-bottom: 0.5rem;
    margin-left: 1rem;
    svg {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
  }
`;
