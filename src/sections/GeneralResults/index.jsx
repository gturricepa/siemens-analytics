import React from "react";
import * as Styled from "./styles";
import * as XLSX from "xlsx";
import { Indicators } from "../../components/Indicators";
import {
  BarChartOutlined,
  CalendarOutlined,
  FilterOutlined,
  RadarChartOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { AlertOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { List } from "../../components/List";
export const GeneralResults = () => {
  const [data, setData] = React.useState([]);
  const [selectedDates, setSelectedDates] = React.useState([]);

  React.useEffect(() => {
    document.title = "CEPA | SIEMENS - Restultados Gerais";
    const fetchData = async () => {
      const response = await fetch("SIEMENS.xlsx");
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

      setSelectedDates(dates);
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

  const uniqueDrivers = new Set(filteredData.map((item) => item.driver));
  const uniqueActivities = new Set(
    filteredData.map((item) => item.atividade_id)
  );
  const uniqueActivitiesType = new Set(
    filteredData.map((item) => item.atividade_nome)
  );

  const dates = Array.from(
    new Set(data.map((item) => item.realization_date_online))
  ).map((excelDate) => {
    return new Date((excelDate - 25569) * 86400 * 1000);
  });

  const uniqueTopics = Array.from(
    new Set(filteredData.map((item) => item.topicos))
  );

  const calculateSuccessRates = () => {
    return uniqueTopics.map((topic) => {
      const topicData = filteredData.filter((item) => item.topicos === topic);
      const totalResponses = topicData.length;
      const approvedResponses = topicData.filter(
        (item) => item.respostas_instrutor === "Aprovado"
      ).length;

      const successRate =
        totalResponses > 0 ? (approvedResponses / totalResponses) * 100 : 0;

      return {
        topic,
        successRate,
      };
    });
  };

  const chartData = calculateSuccessRates();

  const notApproved = filteredData.filter(
    (item) => item.respostas_instrutor !== "Aprovado"
  );

  return (
    <Styled.Main>
      <Styled.Holder>
        <Styled.Left>
          <h2>
            <FilterOutlined /> Filtros
          </h2>
          <Styled.Filter>
            <CalendarOutlined />
            {dates.length === 0 ? (
              <Spin />
            ) : (
              dates.map((date) => (
                <label key={date.toString()}>
                  <input
                    type="checkbox"
                    checked={selectedDates.some(
                      (d) => d.toDateString() === date.toDateString()
                    )}
                    onChange={() => handleCheckboxChange(date)}
                  />
                  {date
                    .toISOString()
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("/")}
                </label>
              ))
            )}
          </Styled.Filter>
          <h2>
            <RadarChartOutlined /> Indicadores
          </h2>

          <Indicators
            totalDrivers={uniqueDrivers.size}
            activitiesDone={uniqueActivities.size}
            activitiesTypes={uniqueActivitiesType.size}
          />
        </Styled.Left>
        <Styled.Right>
          {filteredData.length === 0 ? (
            <div id="geral">
              <Spin id="spin" />
            </div>
          ) : (
            <>
              {" "}
              <h2>
                <BarChartOutlined /> Percentual Geral do desempenho
              </h2>{" "}
              <BarChart width={900} height={370} data={chartData}>
                <XAxis dataKey="topic" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
                <Bar dataKey="successRate" fill="#009999" name="Aprovação" />
              </BarChart>
            </>
          )}
        </Styled.Right>
      </Styled.Holder>
      <List
        data={filteredData}
        text={"Resultados Gerais por Módulos"}
        icon={<TrophyOutlined />}
        full={false}
      ></List>
      <List
        data={notApproved}
        text={"Reprovação de Condutores por Módulo"}
        icon={<AlertOutlined />}
        full={true}
      ></List>
    </Styled.Main>
  );
};
