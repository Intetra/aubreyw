import React from "react";
import { View, StyleSheet, Image, Text, ActivityIndicator } from "react-native";
import useWindowSize from "../customHooks/useWindowSize";

const Template = (device) => {
  console.log(device)
  const { sky, ground, moon, container } = styles
  return (
    <View style={container}>
      <Image
        source={require(`../images/${device}/sky.png`)}
        style={sky}
      />
      <Image
        source={require(`../images/${device}/ground.png`)}
        style={ground}
      />
      <Image
        source={require(`../images/${device}/moon.png`)}
        style={moon}
      />
    </View>
  );
};

const Background = () => {
  const { container, moon, test } = styles;
  const [width, height] = useWindowSize();
  console.log(width);

  if (width == 0) {
    return <ActivityIndicator />;
  } else if (width <= 576) {
    return Template("phone");
  } else if (width <= 768) {
    return Template("ipad");
  } else if (width <= 1920) {
    return Template("desktop");
  } else if (width <= 3840 || width > 3840) {
    return Template("4k");
  } else {
    console.log("Error");
    return Template("Error Determining Screen Size");
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  sky: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 1,
  },
  ground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    zIndex: 3,
  },
  moon: {
    position: "absolute",
    width: "90%",
    height: "100%",
    resizeMode: "contain",
    zIndex: 2,
  },
  test: {
    backgroundColor: "gray",
    position: "absolute",
    color: "red",
    width: "100%",
    height: "100%",
    zIndex: 2,
  },
});

export default Background;
