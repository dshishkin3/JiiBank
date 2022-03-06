import React, { FC } from "react";
import styled from "styled-components/native";
import { useProfile } from "../../../hooks/useProfile";

import ActivityCard from "../../ui/acitivityCard/ActivityCard";
import Heading from "../../ui/heading/Heading";
import Layout from "../../ui/layout/Layout";

const Activity: FC = () => {
  const { profile } = useProfile();

  return (
    <Layout>
      <Heading size="big" isCenter>
        Activity
      </Heading>
      <Operations>
        <ActivityCard cards={profile.operations} />
      </Operations>
    </Layout>
  );
};

const Operations = styled.View``;

export default Activity;
