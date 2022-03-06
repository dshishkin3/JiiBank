import { View, Text } from "react-native";
import React, { FC } from "react";
import { useCurrencies } from "../../../../hooks/useCurrencies";
import styled from "styled-components/native";
import Loader from "../../../ui/loader/Loader";
import { black_shadow } from "../../../../styles";

const Currencies: FC = () => {
  const { isLoading, currencies } = useCurrencies();

  return (
    <Container style={{ ...black_shadow }}>
      {isLoading ? (
        <Loader />
      ) : (
        currencies.map((cur) => (
          <Currency key={cur.name}>
            <Name>{cur.name}</Name>
            <Value>{cur.value}</Value>
          </Currency>
        ))
      )}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  border-radius: 15px;
  padding: 10px 20px;
`;

const Currency = styled.View`
  flex-direction: row;
`;

const Name = styled.Text`
  margin-right: 5px;
  color: #9e9e9e;
`;

const Value = styled.Text``;

export default Currencies;
