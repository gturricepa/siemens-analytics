import styled from "styled-components";

export const Holder = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Input = styled.input`
  width: 80%;
  height: 3rem;
  border: 1px solid #333333;
  border-radius: 5px;
  font-family: "Roboto";
  padding: 8px;
  box-sizing: border-box;
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;

  &::placeholder {
    font-size: "1rem";
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const BtnLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 3rem;
  border: 1px solid #333333;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  background-color: ${(props) => (props.loading ? "#e0e0e0" : "#009999")};
  color: white;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.loading ? "#e0e0e0" : "#333333")};
    color: ${(props) => (props.loading ? "initial" : "white")};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const AutoComplete = styled.div`
  width: 80%;
  height: 35px;
`;

export const Name = styled.h1`
  color: #333333;
`;

export const Logo = styled.img`
  width: 22rem;
  @media (max-width: 1100px) {
    width: 15rem;
  }
`;
