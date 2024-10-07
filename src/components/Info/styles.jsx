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
  width: 90%;
  height: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;

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
    width: 100%;
  }

  p {
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
  margin-bottom: 20px;

  svg {
    margin-left: 15px;
    font-size: 1.3rem;
  }

  &:hover {
    background: #333333;
  }
`;
