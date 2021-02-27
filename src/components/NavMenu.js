import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const NavMenu = (props) => {
  const { container, buttonHolder, button, line } = styles;
  const { updatePane } = props;
  return (
    <View style={container}>
      <TouchableOpacity
        style={buttonHolder}
        onPress={() => updatePane("about")}
      >
        <Text style={button}>About</Text>
      </TouchableOpacity>
      <View style={line} />
      <TouchableOpacity style={buttonHolder} onPress={() => updatePane("work")}>
        <Text style={button}>Work</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "black",
    backgroundColor: "rgba( 0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
  buttonHolder: {
    position: "relative",
    width: "50%",
    maxHeight: "30%",
    padding: 20,
    minHeight: "20%",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
    width: "100%",
    height: 50,
    fontSize: 38,
    color: "white",
    flexWrap: "nowrap",
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    height: 2,
    width: "50%",
    margin: 10,
  },
});

export default NavMenu;
