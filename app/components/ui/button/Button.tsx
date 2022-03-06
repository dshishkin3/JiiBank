import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IButton {
  children?: JSX.Element;
  onPress?: () => void;
  title: string;
  titleColor?: string;
  colors: string[];
  style?: any;
  w?: number | string;
  h?: number | string;
}

const Button: FC<IButton> = ({
  children,
  onPress,
  title,
  style,
  colors,
  h,
  w,
  titleColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{ ...style }}
    >
      <LinearGradient
        colors={colors}
        style={{
          ...styles.container,

          height: h,
          width: w,
        }}
      >
        <Text style={{ ...styles.title, color: titleColor }}>{title}</Text>
        {children && <Text style={{ marginLeft: 10 }}>{children}</Text>}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
  },
});

export default Button;
