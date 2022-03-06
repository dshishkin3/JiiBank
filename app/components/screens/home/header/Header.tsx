import React, { FC } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useProfile } from "../../../../hooks/useProfile";

import Heading from "../../../ui/heading/Heading";
import Loader from "../../../ui/loader/Loader";

const Header: FC = () => {
  const { navigate } = useNavigation();
  const { isLoading, name } = useProfile();

  return (
    <Container>
      <Title onPress={() => navigate("Profile")} activeOpacity={0.3}>
        <WelcomeBack>Welcome Back!</WelcomeBack>
        {isLoading ? (
          <Loader />
        ) : (
          <Heading size="big">{name} &#128075;</Heading>
        )}
      </Title>
      <TouchableOpacity activeOpacity={0.4}>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  margin-top: -20px;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.TouchableOpacity``;

const WelcomeBack = styled.Text`
  color: #9b9b9b;
  font-size: 14px;
`;

export default Header;
