import React, { FC } from "react";
import { Platform, StatusBar, View } from "react-native";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBar.currentHeight;

const StatusBarBlock: FC = () => {
  return (
    <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "#f0f0f0" }}>
      <StatusBar translucent barStyle="dark-content" />
    </View>
  );
};

export default StatusBarBlock;
