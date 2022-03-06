import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { useCards } from "../../../../hooks/useCards";
import ApplyNewProduct from "./apply-new-product/ApplyNewProduct";
import styled from "styled-components/native";

const cardWorld = "../../../../../assets/cardWorld.png";
const cardPrepaid = "../../../../../assets/cardPrepaid.png";

const Card: FC = () => {
  const { cards } = useCards();

  return (
    <Container>
      <Cards horizontal={true} showsHorizontalScrollIndicator={false}>
        {!cards.length && (
          <CardBlock style={{ ...styles.container, opacity: 0.3 }}>
            <Image source={require(cardWorld)} />

            <InfoCard>
              <CurrentBalance>Current Balance</CurrentBalance>
              <Balance>$ 0,000,00</Balance>
              <Bottom>
                <CardNumber>0000 0000 0000 0000</CardNumber>
                <Date>02/25</Date>
              </Bottom>
            </InfoCard>
          </CardBlock>
        )}

        {cards.map((item) => (
          <CardBlock
            style={{ ...styles.container, opacity: cards.length ? 1 : 0.3 }}
            key={item._id}
          >
            {item.name === "World" && <Image source={require(cardWorld)} />}
            {item.name === "Prepaid" && <Image source={require(cardPrepaid)} />}
            <InfoCard>
              <CurrentBalance>Current Balance</CurrentBalance>
              <Balance>
                {item.currency === "USD" ? "$" : "€"} {item.balance}
              </Balance>
              <Bottom>
                <CardNumber>{item.cardNumber}</CardNumber>
                <Date>02/25</Date>
              </Bottom>
            </InfoCard>
          </CardBlock>
        ))}
      </Cards>
      <ApplyNewProduct />
    </Container>
  );
};

const Container = styled.View`
  margin-top: -15px;
  flex-direction: row;
  margin-left: -20px;
`;

const Cards = styled.ScrollView`
  margin-right: 8px;
`;

const CardBlock = styled.View`
  flex-direction: row;
  margin: 15px;
  margin-bottom: 15px;
`;

const Image = styled.Image``;

const InfoCard = styled.View`
  position: absolute;
  top: 30px;
  left: 25px;
`;

const CurrentBalance = styled.Text`
  color: #d6d6d6;
  opacity: 0.8;
  margin-bottom: 5px;
`;

const Balance = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 45px;
`;

const Bottom = styled.View`
  flex-direction: row;
`;

const CardNumber = styled(Balance)`
  font-size: 14px;
`;

const Date = styled(CardNumber)`
  margin-left: 20px;
`;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
});

export default Card;
