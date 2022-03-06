import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import styled from "styled-components/native";

import Heading from "../../ui/heading/Heading";
import Layout from "../../ui/layout/Layout";
import Users from "../../ui/users/Users";
import Importants from "../../ui/importants/Importants";

const Payments: FC = () => {
  const { navigate } = useNavigation();

  return (
    <Layout>
      <Heading size="big" isCenter>
        Payments
      </Heading>
      <Contacts>
        <Heading size="small">Contacts transfers</Heading>
        <Users onPress={() => navigate("SendMoney")} />
      </Contacts>
      <Heading size="small" style={{ marginTop: 20 }}>
        Important transfers
      </Heading>
      <Importants />
    </Layout>
  );
};

const Contacts = styled.View``;

export default Payments;
