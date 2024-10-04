import { Button as btn } from "antd";
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
  justify-content: space-between;

  max-width: 100%;
  flex-wrap: nowrap;
`;

export const ListHolder = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 2rem;
  min-height: 15rem;
  width: 100%;

  animation: ${slideIn} 0.5s ease forwards;
  box-sizing: border-box;

  table {
    width: 100%;
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

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 25%;
  margin-left: 2rem;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    display: none;
  }

  h3 {
    svg {
      margin-right: 0rem;
    }
  }
`;

export const Title = styled.h2`
  display: flex;
  margin-top: 2.5rem;
  span {
    margin-right: 1rem;
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

export const HolderComplete = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SButton = styled.button`
  width: 25%;
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
  align-self: flex-end;
  margin-top: 35px;

  svg {
    margin-left: 15px;
    font-size: 1.3rem;
  }

  &:hover {
    background: #333333;
  }
`;
