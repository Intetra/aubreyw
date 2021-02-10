import React from "react";
import { View, StyleSheet, Image } from "react-native";
import useWindowSize from "../customHooks/useWindowSize"


const IndexScreen = () => {
  const { container, background, moon } = styles;
  const [width, height] = useWindowSize();
  console.log(width)

  if (width > 576 && width < 768) {
    console.log('ipad')
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require("../images/splash-ipad/splash-moon-ipad.png")}
        />
        <Image
          style={background}
          source={require("../images/splash-ipad/splash-frame-ipad.png")}
        />
      </View>
    );
  } else if (width >= 768) {
    console.log('Desktop')
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require("../images/splash-main/moon.png")}
        />
        <Image
          style={background}
          source={require("../images/splash-main/frame.png")}
        />
      </View>
    );
  } else {
    console.log('phone')
    return (
      <View style={container}>
        <Image
          style={moon}
          source={require("../images/splash-phone/splash-moon-phone.png")}
        />
        <Image
          style={background}
          source={require("../images/splash-phone/splash-frame-phone.png")}
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
  },
  moon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default IndexScreen;
