import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 11rem;
  height: 11rem;

  svg {
    display: flex;
    height: 2rem;
    width: 2rem;
    align-self: center;
    justify-self: center;
  }
  span {
    display: flex;

    font-size: 1.5rem;
    align-self: center;
    justify-self: center;
  }
`;

export const ItemHolder = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;
