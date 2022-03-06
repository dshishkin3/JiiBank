import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import styled from "styled-components/native";

import Heading from "../../../ui/heading/Heading";
import Users from "../../../ui/users/Users";

const SendAgain: FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Heading size="small">Send Again</Heading>
      <Users onPress={() => navigate("SendMoney")} />
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;
`;

export default SendAgain;
