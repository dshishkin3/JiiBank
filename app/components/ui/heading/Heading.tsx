import React, { FC, ReactNode } from "react";
import styled from "styled-components/native";

interface IHeadingProps {
  children: ReactNode;
  isCenter?: boolean;
  size: "big" | "small";
  style?: {};
}

const Heading: FC<IHeadingProps> = ({
  children,
  isCenter = false,
  size,
  style,
}) => {
  return (
    <Container isCenter={isCenter} size={size} style={style}>
      {children}
    </Container>
  );
};

const Container = styled.Text<IHeadingProps>`
  font-size: ${(props) => (props.size === "big" ? "20" : "16")};
  font-weight: 700;
  margin-bottom: 20px;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
`;

export default Heading;
