import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 99%;
  height: 3.5rem;
  position: fixed;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  margin-top: -8px;
  padding-top: 0;
  z-index: 99999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  span {
    font-size: 2rem;
    cursor: pointer;
    margin-left: 1rem;

    color: #009999;

    & :hover {
      color: black;
      transition: color 0.5s ease, color 0.5s ease;
    }
  }
`;

export const LogOut = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Selector = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
