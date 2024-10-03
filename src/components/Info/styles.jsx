import styled, { keyframes } from "styled-components";

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
`;

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  box-sizing: border-box;

  h1 {
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2rem;
    padding: 0.5rem;
    background-color: #009999;
    color: white;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  p {
    padding: 15px;
    margin: 0;
    font-size: 0.8rem;
  }
`;

export const Navigate = styled.div`
  justify-content: center;
  font-size: 2.5rem;
  align-items: center;
  position: fixed;
  right: 25px;
  bottom: 45px;
  cursor: pointer;
  animation: ${scaleAnimation} 1.5s infinite;
  color: #009999;
`;
