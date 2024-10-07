import RefAutoComplete from "antd/es/auto-complete";
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
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 1rem;
  align-self: center;
  animation: ${slideIn} 0.3s ease;
  width: 80%;
  height: 98%;

  @media (max-width: 1200px) {
    width: 80%;
  }

  table {
    border-collapse: collapse;
    margin-right: 1rem;
  }

  tbody {
    margin: 0;
  }

  th,
  td {
    font-size: 13px;
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
  justify-content: space-evenly;

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
  width: 100%;
  justify-content: space-evenly;
`;

export const StyledAutoComplete = styled(RefAutoComplete)`
  align-self: self-start;
  display: flex;
  margin-left: 2rem;
  .ant-input {
    border: 1px solid #009999;
  }
  .ant-select-item-option-active {
    border-color: #009999;
  }
  input::placeholder {
  }
  .ant-select-selection-placeholder {
    color: grey;
  }

  /* .ant-select-selection-search {
    background-color: red;
  } */
`;

export const Query = styled.div`
  display: flex;
  width: 100%;
`;

export const SButton = styled.button`
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #009999;
  color: white;
  border: none;
  transition: background-color 0.2s;
  height: 2.5rem;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1rem;
  padding: 15px;
  line-height: 2.5rem;
  align-self: flex-start;
  margin-top: 35px;

  svg {
    margin-left: 15px;
    font-size: 1.3rem;
  }

  &:hover {
    background: #333333;
  }
`;
