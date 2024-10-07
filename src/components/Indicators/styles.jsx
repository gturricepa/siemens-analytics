import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 30px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 11rem;
  height: 90%;
  padding-top: 10px;
  padding-bottom: 10px;

  box-sizing: border-box;

  svg {
    display: flex;
    height: 2rem;
    width: 2rem;
    align-self: center;
    justify-self: center;
    margin-left: 0.37rem;
    justify-content: center;
    align-content: center;
  }
  span {
    display: flex;
    font-size: 1.5rem;
    align-self: center;
    justify-self: center;
    justify-content: center;
    align-content: center;
    margin: 15px;
  }
`;

export const ItemHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;
