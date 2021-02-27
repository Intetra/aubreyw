import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const BottomNav = (props) => {
  const { updatePane } = props;
  const { container, iconHolder, icon } = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        onPress={() => {
          updatePane("menu");
        }}
        style={iconHolder}
      >
        <Ionicons style={icon} name="menu" size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  iconHolder: {
    display: "flex",
    position: "relative",
    zIndex: 2,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "relative",
    zIndex: 1,
  },
});

export default BottomNav;
