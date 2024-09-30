import React from "react";
import { Spin } from "antd";
import * as Styled from "./styles";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell } from "recharts";
import { AimOutlined } from "@ant-design/icons";

const excelDateToJSDate = (serial) => {
  const excelStartDate = new Date(Date.UTC(1899, 11, 30));
  return new Date(excelStartDate.getTime() + serial * 24 * 60 * 60 * 1000);
};

export const List = ({ data, icon, text, full }) => {
  const groupedData = data.reduce((acc, item) => {
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

  return (
    <>
      <Styled.Title>
        {icon}
        {text}
      </Styled.Title>
      <Styled.Holder full={full}>
        {data.length > 0 ? (
          <Styled.ListHolder>
            <div style={{ height: "25rem", overflowY: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Data</th>
                    <th>Tópico</th>
                    {full ? <th>Avaliação do Instrutor</th> : <th>Questão</th>}
                    {full ? null : <th>Resultado</th>}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.firstname}</td>
                      <td>{item.lastname}</td>
                      <td>
                        {excelDateToJSDate(
                          item.realization_date
                        ).toLocaleDateString()}
                      </td>
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
                  ))}
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
