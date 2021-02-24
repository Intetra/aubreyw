import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

const NavMenu = (props) => {
  const { container, buttonHolder, button, line } = styles;
  const { updatePane } = props
  return (
    <View style={container}>
      <TouchableOpacity
        style={buttonHolder}
        onPress={() => updatePane('about')}
      >
        <Image source={require("../images/about.png")} style={button} />
      </TouchableOpacity>
      <View style={line} />
      <TouchableOpacity
        style={buttonHolder}
        onPress={() => updatePane('work')}
      >
        <Image source={require("../images/work.png")} style={button} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: "black",
    backgroundColor: "rgba( 0, 0, 0, 0.5)",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  buttonHolder: {
    position: 'relative',
    width: "50%",
    maxHeight: "30%",
    padding: 20,
    minHeight: "20%",
    zIndex: 1
  },
  button: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
