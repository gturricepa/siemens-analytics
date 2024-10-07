import * as XLSX from "xlsx";
import React from "react";
import { Select, Spin } from "antd";
import { FilterOutlined, StockOutlined } from "@ant-design/icons";
import { Info } from "../../components/Info";
import * as Styled from "./styles";

const { Option } = Select;

export const Practice = () => {
  const [data, setData] = React.useState([]);
  const [allDates, setAllDates] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTopic, setSelectedTopic] = React.useState("Postura");
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
          jsonData.map((item) => item.realization_date)
        );

        const dates = Array.from(uniqueDateRealization);
        setAllDates(dates);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDateChange = (date) => {
    if (date === "Todas as Datas") {
      setSelectedDate(null); // Clear selection
    } else {
      setSelectedDate(date);
    }
  };

  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  const filteredData =
    selectedDate === null
      ? data
      : data.filter((item) => item.realization_date === selectedDate);

  const finalFilteredData = selectedTopic
    ? filteredData.filter((item) => item.topicos === selectedTopic)
    : filteredData;

  const finalFilteredDataWithNames = selectedName
    ? finalFilteredData.filter((item) =>
        `${item.firstname} ${item.lastname}`
          .toLowerCase()
          .includes(selectedName.toLowerCase())
      )
    : finalFilteredData;

  const uniqueTopics = Array.from(new Set(data.map((item) => item.topicos)));

  const uniqueName = Array.from(
    new Set(data.map((item) => `${item.firstname} ${item.lastname}`))
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

  return (
    <Styled.Holder>
      <h2>
        <StockOutlined /> Relatório BTW Leves + Práticos
      </h2>
      <Styled.Selectors>
        <Styled.Filters>
          <>
            <FilterOutlined className="first-svg" />

            <Styled.Dates>
              <Select
                placeholder="Selecionar data"
                value={selectedDate === null ? "Todas as Datas" : selectedDate}
                onChange={handleDateChange}
                style={{ width: "100%" }}
              >
                <Option value="Todas as Datas">Todas as Datas</Option>
                {allDates.map((date) => (
                  <Option key={date} value={date}>
                    {date}
                  </Option>
                ))}
              </Select>
            </Styled.Dates>
            <Styled.Labels>
              <Select
                value={selectedTopic}
                onChange={handleTopicChange}
                style={{ width: "100%" }}
                placeholder="Selecionar tópico"
              >
                {uniqueTopics.map((topic) => (
                  <Option key={topic} value={topic}>
                    {topic}
                  </Option>
                ))}
              </Select>
            </Styled.Labels>

            <Styled.StyledAutoComplete
              options={filteredNames.sort().map((name) => ({ value: name }))}
              onSearch={handleSearchChange}
              placeholder="Pesquise por motorista"
              onSelect={(value) => setSelectedName(value)}
              activeBorderColor={"#009999"}
              activeOutlineColor={"rgba(0, 153, 153, 0.1)"}
              hoverBorderColor={"#009999"}
            ></Styled.StyledAutoComplete>
          </>
        </Styled.Filters>
        <Info
          name={selectedName}
          topic={selectedTopic}
          data={finalFilteredDataWithNames}
        />
      </Styled.Selectors>
    </Styled.Holder>
  );
};
