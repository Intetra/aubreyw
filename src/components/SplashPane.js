import React from "react";
import { View, StyleSheet, Image } from "react-native";

const SplashPane = () => {
  const {
    container,
    splashImage,
    splashImageHolder,
    nameLine,
  } = styles;
  return (
    <View style={container}>
      <Image source={require("../images/splash.svg")} style={nameLine} />
      <View style={splashImageHolder}>
        <Image source={require("../images/selfie.png")} style={splashImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  nameLine: {
    height: 120,
    width: "60%",
    minWidth: 120,
    resizeMode: "contain",
  },
  splashImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  splashImageHolder: {
    padding: 20,
    height: 400,
    maxHeight: "50%",
    width: "70%",
  },
});

export default SplashPane;
