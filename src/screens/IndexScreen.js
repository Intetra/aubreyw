import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

//start paste================================================
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(
    () => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    },[]);
  return size;
}

function ShowWindowDimensions(props) {
  const [width, height] = useWindowSize();
  return (
    <span>
      Window size: {width} x {height}
    </span>
  );
}
//finish paste============================================

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
