import React, { useState } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Background from "../components/Background";
import InfoPane from "../components/InfoPane";
import BottomNav from "../components/BottomNav";
import NavMenu from "../components/NavMenu";
import WorkPane from "../components/WorkPane";

const IndexScreen = () => {
  const { container, background, navMenu, middle, bottomNav } = styles;
  const [pane, setPane] = useState("about");

  const updatePane = (prop) => {
    setPane(prop);
  };

  const paneHandler = (pane) => {
    if (pane) {
      if (pane === "about") {
        return <InfoPane style={middle} />;
      } else if (pane === "work") {
        return <WorkPane updatePane={updatePane} style={middle} />;
      } else if (pane === "menu") {
        return <NavMenu updatePane={updatePane} style={navMenu} />;
      }
    } else {
      return console.log("No Pane");
    }
  };

  return (
    <View
      style={[
        container,
        {
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        },
      ]}
    >
      <Background style={background} />
      {paneHandler(pane)}
      <BottomNav updatePane={updatePane} style={bottomNav} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    elevation: 0,
    zIndex: 0,
  },
  middle: {
    position: "absolute",
    elevation: 1,
    zIndex: 1,
  },
  bottomNav: {
    position: "absolute",
    elevation: 1,
    zIndex: 1,
    bottom: 0,
  },
  navMenu: {
    position: "absolute",
    elevation: 2,
    zIndex: 2,
  },
});

export default IndexScreen;
