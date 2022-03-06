import React, { FC } from "react";
import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";

interface IEnterNumberProps {
  amount: string;
  setAmount: (arg0: string) => void;
}

const EnterNumber: FC<IEnterNumberProps> = ({ amount, setAmount }) => {
  return (
    <Container>
      <Count>${amount}</Count>
      <Numbers>
        {numbers.map((number) => (
          <Number
            key={number.id}
            onPress={() => setAmount(amount + number.number)}
          >
            <TextNumber>{number.number}</TextNumber>
          </Number>
        ))}
        <Back>
          <FontAwesome5
            name="backspace"
            size={24}
            color="black"
            onPress={() => setAmount(amount.slice(0, -1))}
          />
        </Back>
      </Numbers>
    </Container>
  );
};

const Container = styled.View``;

const Count = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  color: black;
  margin-top: 10px;
`;

const Numbers = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 25px;
`;

const Back = styled.TouchableOpacity`
  padding: 30px 33px;
`;

const Number = styled.TouchableOpacity`
  padding: 30px 40px;
`;

const TextNumber = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: #1b1b1b;
  text-align: center;
`;

export default EnterNumber;

const numbers = [
  { id: 1, number: 1 },
  { id: 2, number: 2 },
  { id: 3, number: 3 },
  { id: 4, number: 4 },
  { id: 5, number: 5 },
  { id: 6, number: 6 },
  { id: 7, number: 7 },
  { id: 8, number: 8 },
  { id: 9, number: 9 },
  { id: 0, number: 0 },
];
