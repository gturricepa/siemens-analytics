import React from "react";
import { Header } from "../../components/Header";
import { GeneralResults } from "../../sections/GeneralResults";
import { DriversResults } from "../../sections/DriversResults";
import * as Styled from "./styles";
import { Notes } from "../../sections/Notes";
import { Practice } from "../../sections/Practice";

export const Home = () => {
  const [activeComponent, setActiveComponent] = React.useState("general");

  const handleSelect = (component) => {
    setActiveComponent(component);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "general":
        return <GeneralResults />;
      case "users":
        return <DriversResults />;
      case "practical":
        return <Practice />;
      case "notes":
        return <Notes />;
      default:
        return <GeneralResults />;
    }
  };

  return (
    <div>
      <Header onSelect={handleSelect} />
      <Styled.Main>{renderComponent()}</Styled.Main>
    </div>
  );
};
