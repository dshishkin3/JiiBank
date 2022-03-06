import React, { FC } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { TypeRootStackParamList } from "../../../navigation/types";
import { IFooterItem } from "../types";

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string | undefined;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;

  return (
    <Icon onPress={() => navigate(item.title)}>
      <AntDesign
        name={item.iconName}
        style={{
          color: isActive ? "#2a7fd3" : "gray",
          fontSize: 20,
        }}
      />
      <Text
        style={{
          color: isActive ? "#3686d6" : "gray",
          fontSize: 12,
          marginTop: 1,
        }}
      >
        {item.title}
      </Text>
    </Icon>
  );
};

export default NavItem;

const Icon = styled.Pressable`
  align-items: center;
  width: 20%;
`;
