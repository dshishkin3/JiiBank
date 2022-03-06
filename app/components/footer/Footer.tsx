import React, { FC } from "react";
import styled from "styled-components/native";

import { TypeRootStackParamList } from "../../navigation/types";
import { menu } from "./menu";

import NavItem from "./NavItem/NavItem";
interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string | undefined;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <Container>
      {menu.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
        />
      ))}
    </Container>
  );
};

export default Footer;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 5px 0px;
`;
