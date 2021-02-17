import React from "react";
import { View, StyleSheet, Image } from "react-native";
import useWindowSize from "../customHooks/useWindowSize"

const Background = () => {

  const { container, moon, test } = styles;
  const [width, height] = useWindowSize();
  console.log(width)

  if (width > 576 && width <= 768) {
    console.log('ipad')
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require("../images/ipad/moon.png")}
        />
      </View>
    );
  } else if (width > 768) {
    console.log('Desktop')
    return (
      <View style={container}>
        <Image
            style={moon}
          source={require("../images/ipad/moon.png")}
        />
      </View>
    );
  } else {
    console.log('phone')
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require("../images/ipad/moon.png")}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 1
  },
  moon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 0

  },
  test: {
    backgroundColor: 'gray',
    position: "absolute",
    color: 'red',
    width: '100%',
    height: '100%',
    zIndex: 2
  }
});

export default Background;
