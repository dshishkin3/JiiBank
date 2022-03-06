import React, { FC } from "react";
import { useAuth } from "../../../hooks/useAuth";
import styled from "styled-components/native";
import { useProfile } from "../../../hooks/useProfile";
import { useUpdateProfile } from "../../../hooks/useUpdateProfile";

import Layout from "../../ui/layout/Layout";
import StatusBarBlock from "../../ui/statusBar/StatusBar";
import Heading from "../../ui/heading/Heading";
import Field from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import Loader from "../../ui/loader/Loader";

const Profile: FC = () => {
  const { isLoading: IsProfileLoading, name, setName, profile } = useProfile();
  const { logout } = useAuth();

  const { isLoading, isSuccess, updateProfile } = useUpdateProfile(
    name,
    profile.docId
  );

  return (
    <Layout>
      <StatusBarBlock />
      <Heading size="big" isCenter>
        Profile
      </Heading>
      {isSuccess && (
        <SuccessBlock>
          <SuccessTitle>Profile updated successfully</SuccessTitle>
        </SuccessBlock>
      )}
      {IsProfileLoading || isLoading ? (
        <Loader />
      ) : (
        <>
          <Field value={name} placeholder={name} onChange={setName} />
          <Button
            title="Update profile"
            colors={["#ffb920"]}
            h={45}
            style={{ marginBottom: 30 }}
            onPress={updateProfile}
          />
          <Button title="Logout" colors={["#cacaca"]} h={45} onPress={logout} />
        </>
      )}
    </Layout>
  );
};

const SuccessBlock = styled.View`
  background: #1cbd3f;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
`;

const SuccessTitle = styled.Text`
  text-align: center;
  color: #fff;
`;

export default Profile;
