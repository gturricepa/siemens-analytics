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

export const Holder = styled.section`
  display: flex;
  justify-content: space-evenly;

  flex-direction: ${(props) => (props.full ? "column" : "row")};

  width: ${(props) => (props.full ? "100%" : "70%")};
`;

export const ListHolder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 2rem;
  min-height: 15rem;

  animation: ${slideIn} 0.5s ease forwards;
  min-width: 100%;
  box-sizing: border-box;
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    border-bottom: 1px solid lightgray;
    padding: 0.8rem;
    text-align: center;
  }

  tr {
    border-bottom: 1px solid lightgray;

    &:last-child {
      border-bottom: none;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  align-self: center;
  justify-self: center;

  box-sizing: border-box;
  h3 {
    svg {
      margin-right: 0.3rem;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  margin-top: 2.5rem;
  span {
    margin-right: 0.5rem;
  }
`;
