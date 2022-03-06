import React, { FC } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { MaterialIcons } from "@expo/vector-icons";

import Loader from "../loader/Loader";
import { IOperation, useProfile } from "../../../hooks/useProfile";
import { blue_shadow } from "../../../styles";

interface IActivityCardProps {
  cards?: IOperation[];
}

const ActivityCard: FC<IActivityCardProps> = ({ cards }) => {
  const { isLoading } = useProfile();

  return isLoading ? (
    <Loader />
  ) : (
    <Cards>
      {!cards?.length ? (
        <Empty>You haven't made any transactions yet :(</Empty>
      ) : (
        cards?.map((card) => (
          <Card>
            <Avatar style={{ ...blue_shadow }}>
              <AvatarText>
                <MaterialIcons name="payment" size={24} color="#fff" />
              </AvatarText>
            </Avatar>
            <Info>
              <Title>{card.name}</Title>
              <Date>
                {dayjs(dayjs.unix(card.timestamp.seconds)).format("DD MM,YYYY")}
              </Date>
            </Info>
            <Count>- {card.sum} $</Count>
          </Card>
        ))
      )}
    </Cards>
  );
};

const Card = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  padding: 10px;
  margin-top: -10px;
  margin-bottom: 20px;
`;

const Cards = styled.View``;

const Avatar = styled.View`
  background: #1164ff;
  border-radius: 70;
  padding: 10px 15px;
`;

const AvatarText = styled.Text`
  color: #fff;
  font-weight: 700;
  font-size: 25px;
`;

const Info = styled.View`
  align-items: center;
`;

const Title = styled.Text`
  margin-bottom: 5px;
  font-weight: 600;
`;

const Date = styled.Text``;

const Count = styled.Text`
  color: #115cff;
  font-weight: 600;
`;

const Empty = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #969696;
`;

export default ActivityCard;
