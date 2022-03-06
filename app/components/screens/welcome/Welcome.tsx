import { StyleSheet, Image } from "react-native";
import React, { FC } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import Button from "../../ui/button/Button";

const Welcome: FC = () => {
  const { navigate } = useNavigation();

  return (
    <LinearGradient colors={["#2d76e2", "#168ff1"]} style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../../assets/welcomeCard.png")}
      />
      <Text>
        <Title>Keep Your Money Comportably And Safely</Title>
        <Subtitle>
          With JiiBank safety features now your money will be safe from thieves
        </Subtitle>
      </Text>

      <Button
        title="Get Started"
        colors={["#e7b13b", "#f8cd0b"]}
        h={60}
        w={180}
        onPress={() => navigate("Auth")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    paddingTop: 60,
    paddingBottom: 60,
  },
  image: {
    marginRight: -50,
  },
});

const Text = styled.View`
  max-width: 80%;
`;

const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 25;
  margin-bottom: 30;
`;

const Subtitle = styled(Title)`
  font-size: 14;
  font-weight: 400;
  padding: 0px 35px;
  margin-bottom: 0;
`;

export default Welcome;
