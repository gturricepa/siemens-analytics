import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import * as Styled from "./styles";

export const PraticeChart = ({ data, topic }) => {
  const chartData = {};

  data.forEach((item) => {
    const topico = item.respostas_topicos;
    const status =
      item.respostas_instrutor === "Aprovado" ? "Aprovado" : "Reprovado";

    if (!chartData[topico]) {
      chartData[topico] = { topico, aprovado: 0, reprovado: 0 };
    }

    if (status === "Aprovado") {
      chartData[topico].aprovado += 1;
    } else {
      chartData[topico].reprovado += 1;
    }
  });

  const finalData = Object.values(chartData);

  if (!finalData.length) {
    return <Styled.Holder>Nenhum dado disponível para exibir.</Styled.Holder>;
  }

  const yAxixSize = (topic) => {
    const topicValues = {
      Todos: 2,
      Postura: 250,
      "Mecânica de Braços": 250,
      "Uso dos Pedais e Alavanca de Câmbio": 250,
      "Uso da Caixa de Câmbio/Transmissão": 250,
      Estacionamento: 300,
      "Física Aplicada à Condução": 200,
      "Frenagem de Emergência": 300,
      "Tempo de Reação": 200,
      "Manobra em Espaço Reduzido": 350,
      "Reação de Aceleração": 200,
      "Regulagem de Espelhos": 200,
      Velocidade: 200,
      "Esquiva de Emergência": 200,
    };

    return topicValues[topic] || 0;
  };
  const formatTick = (tick) => `${tick}`;
  return (
    <Styled.Holder>
      <BarChart width={900} height={500} data={finalData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis
          dataKey="topico"
          type="category"
          tickFormatter={formatTick}
          width={yAxixSize(topic)}
          fontSize={14}
        />
        <Tooltip />
        <Bar dataKey="aprovado" fill="#009999" />
        <Bar dataKey="reprovado" fill="#e64e40" />
      </BarChart>
    </Styled.Holder>
  );
};
