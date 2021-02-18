import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Animated, Image } from "react-native";
import useWindowSize from "../customHooks/useWindowSize";
import spinningImage from "../customHooks/spinningImage"

const Template = (device, spin) => {
  const { moon, container, sky, ground } = styles
  console.log(device)
  console.log(spin)
  const moonSource = require(`../images/${device}/moon.png`)
  return (
    <View style={container}>
      <Animated.Image
        source={moonSource}
        style={[moon, {transform: [{rotate: spin}]}]}
      />
      <Image
        source={require(`../images/${device}/sky.png`)}
        style={sky}
      />
      <Image
        source={require(`../images/${device}/ground.png`)}
        style={ground}
      />
    </View>
  );
};

const Background = () => {
  const spin = spinningImage()

  const { container, moon, test } = styles;
  const [width, height] = useWindowSize();
  console.log(width);

  if (width == 0) {
    return <ActivityIndicator />;
  } else if (width <= 576) {
    return Template("phone", spin);
  } else if (width <= 768) {
    return Template("ipad", spin);
  } else if (width <= 1920) {
    return Template("desktop", spin);
  } else if (width <= 3840 || width > 3840) {
    return Template("4k", spin);
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
    width: "100%",
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
