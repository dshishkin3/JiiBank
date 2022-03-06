import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useAuth } from "../../../hooks/useAuth";

import Button from "../../ui/button/Button";
import Heading from "../../ui/heading/Heading";
import Field from "../../ui/input/Input";
import Loader from "../../ui/loader/Loader";
import StatusBarBlock from "../../ui/statusBar/StatusBar";

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const [data, setData] = useState<IData>({} as IData);
  const [isReg, setIsReg] = useState<boolean>(true);

  const { login, register, isLoading } = useAuth();

  const authHandler = async () => {
    const { email, password } = data;

    if (isReg) await login(email, password);
    else await register(email, password);
  };

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <StatusBarBlock />
          <Heading size="big" isCenter>
            {isReg ? "Sign In" : "Sign Up"}
          </Heading>
          <Field
            placeholder="Enter email"
            value={data.email}
            onChange={(val) => setData({ ...data, email: val })}
          />
          <Field
            placeholder="Enter password"
            value={data.password}
            isSecure
            onChange={(val) => setData({ ...data, password: val })}
          />
          <Button
            onPress={authHandler}
            title="Let`s go"
            h={50}
            colors={["#ffbb29", "#ffe031"]}
          />
          <TouchableOpacity onPress={() => setIsReg(!isReg)}>
            <Switch>{isReg ? "Register" : "Login"}</Switch>
          </TouchableOpacity>
        </View>
      )}
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 60px;
`;

const Switch = styled.Text`
  margin-top: 15px;
  color: #c3c3c3;
  justify-content: flex-end;
  text-align: right;
`;

export default Auth;
