import React, { FC } from "react";
import styled from "styled-components/native";

interface IInput {
  onChange: (val: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IInput> = ({
  onChange,
  value,
  placeholder,
  isSecure = false,
}) => {
  return (
    <Input
      maxLength={25}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={isSecure}
    />
  );
};

export default Field;

const Input = styled.TextInput`
  background-color: #e6e6e6;
  height: 45px;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 15px;
  padding-left: 15px;
`;
