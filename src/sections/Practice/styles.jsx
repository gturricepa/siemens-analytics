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

  width: 100%;

  h3 {
    margin-top: 3rem;
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

    justify-self: center;
    width: 90%;
    border-collapse: collapse;
    font-size: 10px;
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

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  width: 35%;
  height: calc(100vh - 10rem);

  @media (max-height: 700px) {
    height: calc(100vh - 4rem);
    /* background-color: red; */
  }
  margin-left: 2rem;
  box-sizing: border-box;
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
  @media (max-width: 1200px) {
    display: flex;
    width: 100%;

    height: 100%;
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
  box-sizing: border-box;
  padding: 0.2rem;
  max-height: 100%;

  .ant-radio-wrapper {
  }
  label {
    align-items: space-around;
    width: 100%;
    font-size: 1rem;
    padding-bottom: 0.4rem;
    box-sizing: border-box;
    @media (max-height: 700px) {
      padding-bottom: 0.1rem;
      display: flex;
    }
    @media (max-width: 1200px) {
      flex-wrap: wrap;

      height: 1.5rem;
    }
  }
`;

export const Selectors = styled.div`
  display: flex;

  width: 100%;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-self: center;
  }
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
