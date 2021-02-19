import React, { useEffect } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Animated, Image } from "react-native";
import useWindowSize from "../customHooks/useWindowSize";
import spinningImage from "../customHooks/spinningImage";
import Images from '../images/index'



const Template = (device, spin) => {
  const { moon, moonHolder, container, sky, skyHolder, ground, groundHolder } = styles
  const { bigGround, bigMoon, bigSky, desktopGround, desktopMoon, desktopSky,
    ipadGround, ipadMoon, ipadSky, phoneGround, phoneMoon, phoneSky } = Images

  let groundSource
  let moonSource
  let skySource

  if (device === "phone") {
    groundSource = phoneGround
    moonSource = phoneMoon
    skySource = phoneSky
  } else if (device === "ipad") {
    groundSource = ipadGround
    moonSource = ipadMoon
    skySource = ipadSky
  } else if (device === "desktop") {
    groundSource = desktopGround
    moonSource = desktopMoon
    skySource = desktopSky
  } else if (device === "4k") {
    groundSource = bigGround
    moonSource = bigMoon
    skySource = bigSky
  } else {
    return device
  }

  return (
    <View style={container}>
      <View style={groundHolder}>
        <Image
          source={groundSource}
          style={ground}
        />
      </View>
      <View style={moonHolder}>
        <Animated.Image
          source={moonSource}
          style={[moon, {transform: [{rotate: spin}]}]}
        />
      </View>
      <View style={skyHolder}>
        <Image
          source={skySource}
          style={sky}
        />
      </View>
    </View>
  );
};

const Background = () => {
  const spin = spinningImage()

  const { container, moon, test } = styles;
  const [width, height] = useWindowSize();

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
    position: "absolute",
    width: "100%",
    height: "100%",
    overflow: 'hidden'
  },
  skyHolder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
    elevation: 0
  },
  sky: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  groundHolder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 2,
    elevation: 2
  },
  ground: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  moonHolder: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    elevation: 1
  },
  moon: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'

  },
  test: {
    backgroundColor: "gray",
    position: "absolute",
    color: "red",
    width: "100%",
    height: "100%"
  },
});

export default Background;


/*
<View style={container}>
  <Animated.Image
    source={phoneMoonSource}
    style={[moon, {transform: [{rotate: spin}]}]}
  />
  <Image
    source={sky}
    style={sky}
  />
  <Image
    source={require(`../images/${device}/ground.png`)}
    style={ground}
  />
</View>
*/
