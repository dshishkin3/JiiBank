import React, { FC } from "react";
import styled from "styled-components/native";

const Layout: FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.View`
  padding: 40px 20px;
`;
