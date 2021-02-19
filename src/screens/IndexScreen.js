import React from "react";
import { View, StyleSheet } from "react-native";
import Background from "../components/Background";
import InfoPane from "../components/InfoPane";

const IndexScreen = () => {
  const { container, background, infoPane } = styles;
  return (
    <View style={container}>
      <Background />
      <InfoPane />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    position: 'absolute',
    zIndex: 0
  },
  infoPane: {
    position: 'absolute',
    zIndex: 1
  }
});

export default IndexScreen;
