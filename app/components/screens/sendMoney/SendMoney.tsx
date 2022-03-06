import React, { FC, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import Layout from "../../ui/layout/Layout";
import Heading from "../../ui/heading/Heading";
import Users from "../../ui/users/Users";
import EnterNumber from "./enterNumber/EnterNumber";
import Button from "../../ui/button/Button";
import { blue_shadow } from "../../../styles";
import { useCards } from "../../../hooks/useCards";
import { handleTransferUser } from "../../../utils/handleTransferUser/handleTransferUser";
import { useProfile } from "../../../hooks/useProfile";
import { IContact } from "../home/sendAgain/types";

const SendMoney: FC = () => {
  const { navigate } = useNavigation();
  const { profile } = useProfile();
  const { cards } = useCards();

  const [centerUserCard, setCenterUserCard] = useState<IContact>(
    {} as IContact
  );
  const [amount, setAmount] = useState("");

  const send = async () => {
    handleTransferUser({
      fromCard: cards[0],
      cardNumber: centerUserCard.cardNumber,
      sum: amount,
      _id: profile.docId,
      name: centerUserCard.displayName,
    });

    navigate("Home");
  };

  return (
    <Layout>
      <Back onPress={() => navigate("Home")}>
        <MaterialIcons name="keyboard-backspace" size={30} color="black" />
      </Back>
      <Heading size="big" isCenter>
        Send Money
      </Heading>
      <UsersBlock>
        <Users
          isCenter
          size="big"
          centerUser
          centerUserCard={centerUserCard}
          setCenterUserCard={setCenterUserCard}
        />
      </UsersBlock>
      <EnterNumber amount={amount} setAmount={setAmount} />
      <Button
        title="Confirm"
        colors={["#2d76e2", "#168ff1"]}
        h={55}
        titleColor="#fff"
        style={{ ...blue_shadow }}
        onPress={send}
      />
    </Layout>
  );
};

const Back = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 40px;
`;

const UsersBlock = styled.View``;

export default SendMoney;
