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
  justify-content: center;
  align-items: center;
  animation: ${slideIn} 0.3s ease;
  width: 100%;
  margin-bottom: 0;
  h3 {
    margin-top: 3rem;
  }
  h2 {
    align-self: flex-start;
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
  .first-svg {
    font-size: 1.5rem;
  }
  width: 90%;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid lightgray;
  border-radius: 5px;
  align-items: center;

  margin-bottom: 1rem;
  label {
    font-size: 0.8rem;
  }
  box-sizing: border-box;
  padding: 15px;
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-bottom: 0;
  padding-bottom: 0;
  width: 15rem;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 20rem;
`;

export const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledAutoComplete = styled(RefAutoComplete)`
  width: 35rem;

  .ant-select-selection-placeholder {
    color: grey;
  }
`;
