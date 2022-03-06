import React, { FC } from "react";
import styled from "styled-components/native";

import Currencies from "./currencies/Currencies";
import Menu from "./menu/Menu";
import Layout from "../../ui/layout/Layout";
import Heading from "../../ui/heading/Heading";

const More: FC = () => {
  return (
    <Layout>
      <Heading size="big" isCenter>
        More
      </Heading>
      <Currencies />
      <Menu />
      <Version>Version 1.2.1</Version>
    </Layout>
  );
};

const Version = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #9c9c9c;
  margin-top: 30px;
`;

export default More;
