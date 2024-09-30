import React from "react";
import { Spin } from "antd";
import * as Styled from "./styles";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { AimOutlined } from "@ant-design/icons";

export const List = ({ data, icon, text, full }) => {
  const groupedData = data.reduce((acc, item) => {
    const status =
      item.respostas_instrutor === "Aprovado" ? "Aprovados" : "Reprovados";
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.keys(groupedData).map((status) => ({
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
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                      <td>{item.realization_date}</td>
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
              {" "}
              <AimOutlined />
              Aprovação Geral por Módulo
            </h3>
            <PieChart width={550} height={400} id="wpp">
              {" "}
              {/* Aumentado para 600 de largura */}
              <Pie
                data={pieData}
                cx={300} // Centrado
                cy={200} // Centrado
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={140} // Aumentado para 100
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Styled.Chart>
        )}
      </Styled.Holder>
    </>
  );
};
