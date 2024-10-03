import React, { useState, useEffect } from "react";
import { Spin, AutoComplete } from "antd";
import * as Styled from "./styles";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import { AimOutlined, SearchOutlined } from "@ant-design/icons";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // meses começam em 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const List = ({ data, icon, text, full }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const uniqueNames = [
    ...new Set(data.map((item) => `${item.firstname} ${item.lastname}`)),
  ];

  useEffect(() => {
    const filtered = data.filter((item) =>
      `${item.firstname} ${item.lastname}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );

    setFilteredData(filtered);
  }, [searchValue, data]);

  const groupedData = filteredData.reduce((acc, item) => {
    const status =
      item.respostas_instrutor === "Aprovado" ? "Aprovados" : "Reprovados";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const barData = Object.keys(groupedData).map((status) => ({
    name: status,
    value: groupedData[status],
  }));

  const COLORS = ["#009999", "#e64e40"];
  const sortedData = [...filteredData].sort((a, b) => {
    const nameA = `${a.firstname} ${a.lastname}`.toLowerCase();
    const nameB = `${b.firstname} ${b.lastname}`.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const handleSelect = (value) => {
    setSearchValue(value);
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };
  console.log(data);

  return (
    <>
      <Styled.Title>
        {icon}
        {text}
      </Styled.Title>
      <Styled.Holder full={full}>
        {data.length > 0 ? (
          <Styled.ListHolder>
            <Styled.StyledAutoComplete
              options={uniqueNames.sort().map((name) => ({ value: name }))}
              onSelect={handleSelect}
              onChange={handleChange}
              style={{ width: 500, marginBottom: 16 }}
              placeholder="Pesquise por motorista"
              suffix={<SearchOutlined />}
            />
            <div style={{ height: "25rem", overflowY: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Local</th>

                    <th>Tópico</th>
                    {full ? <th>Avaliação do Instrutor</th> : <th>Questão</th>}
                    {full ? null : <th>Resultado</th>}
                  </tr>
                </thead>
                <tbody>
                  {sortedData.length > 0 ? (
                    sortedData.map((item, index) => (
                      <tr key={index}>
                        <td>
                          {item.firstname} {item.lastname}
                        </td>
                        <td>{item.realization_date_online}</td>
                        <td>{item.city}</td>

                        <td>{item.topicos}</td>
                        <td>{item.respostas_topicos}</td>
                        {full ? null : (
                          <td>
                            {item.respostas_instrutor === "Aprovado"
                              ? "Aprovado"
                              : "Reprovado"}
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={full ? 5 : 4}>
                        Nenhum resultado encontrado
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Styled.ListHolder>
        ) : (
          <div
            style={{
              alignItems: "center",
              height: "5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Spin />
          </div>
        )}
        {!full && (
          <Styled.Chart>
            <h3>
              <AimOutlined />
              Aprovação Geral por Módulo
            </h3>
            <BarChart width={200} height={400} data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`Total ${value}`, ""]} />
              <Bar dataKey="value" fill="#8884d8">
                {barData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </Styled.Chart>
        )}
      </Styled.Holder>
    </>
  );
};
