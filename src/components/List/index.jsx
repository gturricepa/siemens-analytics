import React, { useState, useEffect } from "react";
import { Spin, AutoComplete, Button } from "antd";
import * as Styled from "./styles";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import {
  AimOutlined,
  DownloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { filterColumns, updateColumnValue } from "../../utils/filterColuns";

export const List = ({ data, icon, text, full }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueCity, setSearchValueCity] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const uniqueNames = [
    ...new Set(data.map((item) => `${item.firstname} ${item.lastname}`)),
  ];

  const uniqueCities = [...new Set(data.map((item) => item.city))];

  useEffect(() => {
    const filtered = data.filter((item) => {
      const fullName = `${item.firstname} ${item.lastname}`.toLowerCase();
      const city = item.city.toLowerCase();

      const nameMatch =
        searchValue === "" || fullName === searchValue.toLowerCase();
      const cityMatch =
        searchValueCity === "" || city === searchValueCity.toLowerCase();

      return nameMatch && cityMatch;
    });

    setFilteredData(filtered);
  }, [searchValue, searchValueCity, data]);

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

  const handleSelectCity = (value) => {
    setSearchValueCity(value);
  };

  const handleChangeCity = (value) => {
    setSearchValueCity(value);
  };

  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const exportToExcel = () => {
    const columnsToKeep = [
      "firstname",
      "lastname",
      "realization_date",
      "city",
      "topicos",
      "respostas_topicos",
      "respostas_instrutor",
    ];

    const selectedColumns = filterColumns(sortedData, columnsToKeep);
    const fileToDownload = updateColumnValue(
      selectedColumns,
      "respostas_instrutor",
      "Aprovado",
      "Reprovado"
    );

    const worksheet = XLSX.utils.json_to_sheet(fileToDownload);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    saveAs(blob, "consulta_geral_treinamento_siemens.xlsx");
  };

  return (
    <>
      <Styled.Title>
        {icon}
        {text}
      </Styled.Title>
      <Styled.Holder full={full}>
        {data.length > 0 ? (
          <Styled.ListHolder>
            <Styled.HolderComplete>
              <Styled.StyledAutoComplete
                options={uniqueNames.sort().map((name) => ({ value: name }))}
                onSelect={handleSelect}
                onChange={handleChange}
                style={{ width: 500, marginBottom: 16 }}
                placeholder="Pesquise por motorista"
                suffix={<SearchOutlined />}
              />
              <Styled.StyledAutoComplete
                options={uniqueCities.sort().map((city) => ({ value: city }))}
                onSelect={handleSelectCity}
                onChange={handleChangeCity}
                style={{ width: 500, marginBottom: 16 }}
                placeholder="Pesquise por cidade"
                suffix={<SearchOutlined />}
              />
            </Styled.HolderComplete>
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
                        <td>{item.realization_date}</td>
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
            <Styled.SButton onClick={exportToExcel}>
              Download <DownloadOutlined />
            </Styled.SButton>
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
