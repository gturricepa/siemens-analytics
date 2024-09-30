import React from "react";
import * as XLSX from "xlsx";
import * as Styled from "./styles";
import { Spin } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RiseOutlined } from "@ant-design/icons";

export const DriversResults = () => {
  const [data, setData] = React.useState([]);

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
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    return formattedDate;
  };

  const sortedData = [...data].sort((a, b) => {
    const nameA = `${a.firstname} ${a.lastname}`.toLowerCase();
    const nameB = `${b.firstname} ${b.lastname}`.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return (
    <Styled.Main>
      <h2>
        <RiseOutlined />
        Tabela de consulta BTW Teórico
      </h2>
      <Styled.ListHolder>
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

            <ResponsiveContainer width="20%" height={500}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="total" fill="#009999" />
              </BarChart>
            </ResponsiveContainer>
          </Styled.Separator>
        )}
      </Styled.ListHolder>
    </Styled.Main>
  );
};
