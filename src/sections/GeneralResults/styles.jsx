import styled from "styled-components";

export const Holder = styled.section`
  display: flex;
`;

export const Filter = styled.div`
  display: flex;
  border: 1px solid lightgray;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 100%;
  margin-bottom: 2rem;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);
  }

  label {
    margin-left: 2rem;
  }

  input[type="checkbox"] {
    accent-color: #009999;

    display: inline-block;
    position: relative;
  }

  svg {
    font-size: 1.5rem;
    border-right: 1px solid black;
    padding-right: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  svg {
    margin-right: 0.5rem;
    span {
      font-size: 2rem;
    }
  }
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-left: 1rem;

  #spin {
    margin-left: 25rem;
  }
  svg {
    margin-right: 0.5rem;

    span {
      font-size: 2rem;
    }
  }
`;

export const Main = styled.section`
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 98%;
`;
