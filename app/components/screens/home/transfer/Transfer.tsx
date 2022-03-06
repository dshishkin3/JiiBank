import React, { FC } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Button from "../../../ui/button/Button";

const Transfer: FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Button
        colors={["black"]}
        w={155}
        h={50}
        title="Transfer"
        titleColor="#fff"
        onPress={() => navigate("Payments")}
      >
        <AntDesign name="rocket1" size={18} color="#fff" />
      </Button>
      <Button
        colors={["#fff"]}
        w={155}
        h={50}
        title="Scan QR"
        titleColor="black"
      >
        <AntDesign name="camerao" size={18} color="black" />
      </Button>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export default Transfer;
