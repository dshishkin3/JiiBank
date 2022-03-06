import { Text, StyleSheet, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { getRandomGradient } from "../../../utils/randomGradient";
import { useContacts } from "../../../hooks/useContacts";
import Loader from "../loader/Loader";
import { IContact } from "../../screens/home/sendAgain/types";

const images = [
  { id: 1, img: require("../../../../assets/memojies/person1.png") },
  { id: 2, img: require("../../../../assets/memojies/person4.png") },
  { id: 3, img: require("../../../../assets/memojies/person5.png") },
  { id: 4, img: require("../../../../assets/memojies/person6.png") },
  { id: 5, img: require("../../../../assets/memojies/person1.png") },
  { id: 6, img: require("../../../../assets/memojies/person4.png") },
];

interface IUsers {
  isCenter?: boolean;
  size?: "small" | "big";
  onPress?: () => void;
  centerUser?: boolean;
  centerUserCard?: IContact;
  setCenterUserCard?: (arg0: IContact) => void;
}

const Users: FC<IUsers> = ({
  isCenter,
  size = "small",
  onPress,
  centerUser,
  centerUserCard,
  setCenterUserCard,
}) => {
  const { contacts, isLoading } = useContacts();

  return isLoading ? (
    <Loader />
  ) : (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.container }}
      centerContent={isCenter ? true : false}
    >
      <Cards>
        {contacts.map((contact, i) => (
          <Card
            activeOpacity={0.7}
            key={contact._id}
            onPress={centerUser ? () => setCenterUserCard(contact) : onPress}
          >
            <LinearGradient colors={getRandomGradient()} style={styles.avatar}>
              <Image
                source={images[Math.floor(Math.random() * 6)].img}
                size={size}
                style={{
                  width: centerUserCard === contact ? 70 : 60,
                  height: centerUserCard === contact ? 70 : 60,
                }}
              />
            </LinearGradient>
            <Text>{contact.displayName}</Text>
            <Currency>{contact.name}</Currency>
          </Card>
        ))}
      </Cards>
    </ScrollView>
  );
};

const Cards = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Card = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Image = styled.Image<{ size: string }>`
  width: ${(props) => (props.size === "small" ? "60px" : "70px")};
  height: ${(props) => (props.size === "small" ? "60px" : "70px")};
`;

const Currency = styled.Text`
  color: #8f8f8f;
`;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 30,
    marginBottom: 5,
  },
  container: {
    marginRight: -20,
  },
});

export default Users;
