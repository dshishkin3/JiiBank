import { Linking } from "react-native";
import React, { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { IMoreItem } from "../types";
import { black_shadow } from "../../../../../styles";

interface IMenuItemProps {
  item: IMoreItem;
}

const MenuItem: FC<IMenuItemProps> = ({ item }) => {
  return (
    <Item
      onPress={() => Linking.openURL(item.link)}
      style={{ ...black_shadow }}
    >
      <Info>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
      </Info>
      <Icon>
        <MaterialIcons name={item.iconName} size={22} color="#EDF4FE" />
      </Icon>
    </Item>
  );
};

const Item = styled.Pressable`
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.View`
  width: 80%;
`;

const Icon = styled.View`
  align-items: center;
  background: #2b6eec;
  padding: 10px;
  border-radius: 50px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 22px;
`;

const Desc = styled.Text`
  color: #9e9e9e;
`;

export default MenuItem;
