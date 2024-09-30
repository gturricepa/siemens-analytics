import styled from "styled-components";

export const Holder = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  box-sizing: border-box;
  h1 {
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    padding: 1rem;
    background-color: #009999;
    color: white;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  p {
    padding: 15px;
    margin: 0;
    font-size: 1rem;
  }
`;
