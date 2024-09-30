/* eslint-disable react/prop-types */
import * as Styled from "./styles";
import {
  RocketOutlined,
  SignatureOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";

export const Indicators = ({
  totalDrivers,
  activitiesTypes,
  activitiesDone,
}) => {
  return (
    <Styled.Holder>
      <Styled.ItemHolder>
        <Styled.Item>
          Condutores Treinados
          <UserSwitchOutlined />
          <span>{totalDrivers ? totalDrivers : <Spin size="small" />}</span>
        </Styled.Item>
        <Styled.Item>
          Atividades executadas
          <SignatureOutlined />
          <span>{activitiesDone ? activitiesDone : <Spin size="small" />}</span>
        </Styled.Item>
        <Styled.Item>
          Tipos de Atividades
          <RocketOutlined />
          <span>
            {activitiesTypes ? activitiesTypes : <Spin size="small" />}
          </span>
        </Styled.Item>
      </Styled.ItemHolder>
    </Styled.Holder>
  );
};
