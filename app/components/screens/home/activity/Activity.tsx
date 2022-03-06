import React, { FC } from "react";
import styled from "styled-components/native";
import { useProfile } from "../../../../hooks/useProfile";

import ActivityCard from "../../../ui/acitivityCard/ActivityCard";
import Heading from "../../../ui/heading/Heading";
import Loader from "../../../ui/loader/Loader";

const Activity: FC = () => {
  const { isLoading, operations } = useProfile();

  return (
    <Container>
      <Heading size="small">Recent Activity</Heading>
      {isLoading ? (
        <Loader />
      ) : !operations.length ? (
        <Empty>You haven't made any transactions yet :(</Empty>
      ) : (
        <ActivityCard
          cards={[
            {
              timestamp: operations[operations.length - 1].timestamp,
              name: operations[operations.length - 1].name,
              sum: operations[operations.length - 1].sum,
            },
          ]}
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  margin-top: 15px;
`;

const Empty = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: #969696;
`;

export default Activity;
