import React, { FC } from "react";
import { Alert } from "react-native";
import { useAuth } from "../../../../../hooks/useAuth";
import { AntDesign } from "@expo/vector-icons";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styled from "styled-components/native";
import { db } from "../../../../../firebase";

import { asyncAlert } from "./asyncAlert";
import { getRandomCardNumber } from "../../../../../utils/randomCardNumber";

const ApplyNewProduct: FC = () => {
  const { user } = useAuth();

  const createCard = async () => {
    try {
      const currency = await asyncAlert({
        title: "Currency",
        msg: "Select account currency",
        buttons: {
          text: "USD",
          resolveValue: "USD",
          textSecond: "USD",
          resolveValueSecond: "USD",
        },
      });

      const cardType = await asyncAlert({
        title: "Card type",
        msg: "Select card type",
        buttons: {
          text: "World",
          resolveValue: "World",
          textSecond: "Prepaid",
          resolveValueSecond: "Prepaid",
        },
      });

      await addDoc(collection(db, "cards"), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (err: any) {
      Alert.alert("Error apply new product", err);
    }
  };

  return (
    <AddCard onPress={createCard}>
      <AntDesign name="plus" size={24} color="#fff" />
    </AddCard>
  );
};

const AddCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 30px;
  width: 60px;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export default ApplyNewProduct;
