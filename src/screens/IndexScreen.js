import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Background from "../components/Background";
import InfoPane from "../components/InfoPane";
import BottomNav from "../components/BottomNav"

const IndexScreen = () => {
  const { container, background, infoPane } = styles;
  const [pane, setPane] = useState("about")

  const updatePane = (prop) => {
      setPane(prop)
  }


  return (
    <View style={container}>
      <Background />
      <InfoPane />
      <BottomNav updatePane={updatePane} />
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
  },
  bottomNav: {
    position: 'absolute',
    zIndex: 2
  }
});

export default IndexScreen;
