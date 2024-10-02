import React from "react";
import * as XLSX from "xlsx";
import * as Styled from "./styles";
import { Spin, AutoComplete } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiseOutlined, SearchOutlined } from "@ant-design/icons";

export const DriversResults = () => {
  const [data, setData] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    document.title = "CEPA | SIEMENS - BTW Teórico";

    const fetchData = async () => {
      try {
        const response = await fetch("SIEMENS.xlsx");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const firstSheetName = workbook.SheetNames[2];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching and processing data:", error);
      }
    };

    fetchData();
  }, []);

  const resultCount = data.reduce((acc, item) => {
    const result = item.result_label_online || "Indefinido";
    acc[result] = (acc[result] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(resultCount).map((key) => ({
    name: key,
    total: resultCount[key],
  }));

  const formatDate = (str) => {
    const parts = str.split(" ")[0].split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  const filteredData = data.filter((item) => {
    const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
    return fullName.includes(searchValue.toLowerCase());
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const nameA = `${a.firstname} ${a.lastname}`.toLowerCase();
    const nameB = `${b.firstname} ${b.lastname}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const uniqueNames = [
    ...new Set(data.map((item) => `${item.firstname} ${item.lastname}`)),
  ];

  const handleSelect = (value) => {
    setSearchValue(value);
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <Styled.Main>
      <h2>
        <RiseOutlined />
        Tabela de consulta BTW Teórico
      </h2>
      <Styled.ListHolder>
        <>
          <Styled.StyledAutoComplete
            options={uniqueNames.map((name) => ({ value: name }))}
            onSelect={handleSelect}
            onChange={handleChange}
            style={{ width: 500, marginBottom: 16 }}
            placeholder="Pesquise por motorista"
            suffix={<SearchOutlined />}
          />
        </>
        {!data.length ? (
          <Spin />
        ) : (
          <Styled.Separator>
            <div
              style={{
                overflowX: "auto",
                display: "flex",
                width: "100%",
                maxHeight: "500px",
                justifyContent: "center",
              }}
            >
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Curso</th>
                    <th>Resultado</th>
                    <th>Data de Realização</th>
                    <th>Vencimento</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {item.firstname} {item.lastname}
                      </td>
                      <td>{item.course_type}</td>
                      <td>{item.result_label_online}</td>
                      <td>{formatDate(item.realization_online)}</td>
                      <td>{formatDate(item.expiration_date_online)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {!searchValue && (
              <ResponsiveContainer width="20%" height={500}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#009999" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </Styled.Separator>
        )}
      </Styled.ListHolder>
    </Styled.Main>
  );
};
