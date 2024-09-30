import styled, { keyframes } from "styled-components";
const slideIn = keyframes`
  0% {
    transform: translateX(-100%); 
    opacity: 0; 
  }
  100% {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

export const ListHolder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 1rem;
  align-self: center;
  animation: ${slideIn} 0.3s ease;
  width: 90%;
  height: 98%;

  table {
    border-collapse: collapse;
    margin-right: 1rem;
  }

  th,
  td {
    border-bottom: 1px solid lightgray;
    padding: 0.8rem;
    text-align: center;
  }

  tr {
    border-bottom: 1px solid lightgray;
    padding: 1rem;

    &:last-child {
      border-bottom: none;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    animation: ${slideIn} 0.3s ease;

    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Separator = styled.div`
  display: flex;
`;
