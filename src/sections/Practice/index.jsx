import * as XLSX from "xlsx";
import React from "react";
import { Radio, Spin } from "antd";
import { StockOutlined } from "@ant-design/icons";
import { Info } from "../../components/Info";
import * as Styled from "./styles";

export const Practice = () => {
  const [data, setData] = React.useState([]);
  const [allDates, setAllDates] = React.useState([]);
  const [selectedDates, setSelectedDates] = React.useState([]);
  const [selectedTopic, setSelectedTopic] = React.useState("Todos");
  const [loading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedName, setSelectedName] = React.useState("");
  React.useEffect(() => {
    const fetchData = async () => {
      document.title = "CEPA | SIEMENS - BTW Prático";

      try {
        const response = await fetch("SIEMENS.xlsx");
        if (!response.ok) throw new Error("Network response was not ok");

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);

        const uniqueDateRealization = new Set(
          jsonData.map((item) => item.realization_date_online)
        );

        const dates = Array.from(uniqueDateRealization).map((excelDate) => {
          return new Date((excelDate - 25569) * 86400 * 1000);
        });

        setAllDates(dates);
        setSelectedDates(dates);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (date) => {
    setSelectedDates((prev) => {
      if (prev.some((d) => d.toDateString() === date.toDateString())) {
        return prev.filter((d) => d.toDateString() !== date.toDateString());
      } else {
        return [...prev, date];
      }
    });
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const filteredData =
    selectedDates.length > 0
      ? data.filter((item) => {
          const realizationDate = new Date(
            (item.realization_date_online - 25569) * 86400 * 1000
          );
          return selectedDates.some(
            (date) => date.toDateString() === realizationDate.toDateString()
          );
        })
      : [];

  const finalFilteredData =
    selectedTopic === "Todos"
      ? filteredData
      : filteredData.filter((item) => item.topicos === selectedTopic);

  const finalFilteredDataWithNames = selectedName
    ? finalFilteredData.filter((item) =>
        `${item.firstname} ${item.lastname}`
          .toLowerCase()
          .includes(selectedName.toLowerCase())
      )
    : finalFilteredData;

  const uniqueTopics = Array.from(new Set(data.map((item) => item.topicos)));

  React.useEffect(() => {
    if (selectedDates.length === 0) {
      setSelectedTopic("Esquiva de Emergência");
    }
  }, [selectedDates]);

  const uniqueName = Array.from(
    new Set(data.map((item) => item.firstname + " " + item.lastname))
  );

  const handleSearchChange = (value) => {
    setSearchValue(value);
    setSelectedName(value);
  };

  const filteredNames = uniqueName.filter((name) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (loading) {
    return (
      <Styled.Holder>
        <Spin />
      </Styled.Holder>
    );
  }

  const formateDate = (str) => {
    const parts = str.split(" ");

    const day = parts[2];
    const month = String(new Date(`${parts[1]} 1`).getMonth() + 1).padStart(
      2,
      "0"
    );
    const year = parts[3];

    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  return (
    <Styled.Holder>
      <h2>
        <StockOutlined /> Relatório BTW Leves + Práticos
      </h2>
      <Styled.Selectors>
        <Styled.Filters>
          <Styled.Dates>
            {allDates.map((date) => (
              <div key={date.toString()}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(date)}
                  checked={selectedDates.some(
                    (d) => d.toDateString() === date.toDateString()
                  )}
                />
                {formateDate(date.toDateString())}
              </div>
            ))}
          </Styled.Dates>
          <Styled.Labels>
            <Radio.Group onChange={handleTopicChange} value={selectedTopic}>
              {uniqueTopics
                .slice()
                .reverse()
                .map((topic) => (
                  <Radio key={topic} value={topic}>
                    {topic}
                  </Radio>
                ))}
              <Radio value="Todos">Todos</Radio>
            </Radio.Group>
          </Styled.Labels>

          <Styled.StyledAutoComplete
            options={filteredNames.map((name) => ({ value: name }))}
            style={{ width: "100%", color: "1px solid #9eacac" }}
            onSearch={handleSearchChange}
            placeholder="Filtrar por motorista..."
            onSelect={(value) => setSelectedName(value)}
            activeBorderColor={"#009999"}
            activeOutlineColor={"rgba(0, 153, 153, 0.1)"}
            hoverBorderColor={"#009999"}
          />
        </Styled.Filters>
        <Info topic={selectedTopic} data={finalFilteredDataWithNames} />
      </Styled.Selectors>
    </Styled.Holder>
  );
};
