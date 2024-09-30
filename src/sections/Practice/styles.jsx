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

export const Holder = styled.section`
  display: flex;
  flex-direction: column;
  animation: ${slideIn} 0.3s ease;

  min-width: 100%;

  h3 {
    margin-top: 3rem;
    margin-left: 2.5rem;
  }
  h2 {
    margin-top: 1rem;
    margin-left: 2.5rem;
    svg {
      margin-right: 1rem;
      font-size: 2rem;
    }
  }
  table {
    align-self: center;
    margin-left: 3rem;
    justify-self: center;
    width: 80%;
    border-collapse: collapse;
    font-size: 10px;
  }

  th,
  td {
    padding-left: 2.5rem;

    font-size: 13px;
    border-bottom: 1px solid lightgray;
    padding: 0.8rem;
    text-align: center;
  }

  tr {
    border-bottom: 1px solid lightgray;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  width: 35%;
  height: calc(100vh - 12rem);
  margin-left: 2rem;

  input[type="search"] {
    background-color: #009999;
  }
  label {
    margin-left: 2rem;
  }

  input[type="checkbox"] {
    accent-color: #009999;
  }

  svg {
    font-size: 1.5rem;
    border-right: 1px solid black;
    padding-right: 2rem;
  }
  span {
  }
`;

export const Dates = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 0;
  padding-bottom: 0;

  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100%;
  width: 100%;
  label {
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.4rem;
    box-sizing: border-box;
  }
`;

export const Selectors = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledAutoComplete = styled(RefAutoComplete)`
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
