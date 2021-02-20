import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Sample = () => {
  const { sample } = styles;
  return (
    <View style={sample}>
      <Text>Sample</Text>
    </View>
  );
};

const WorkPane = () => {
  const { sampleHolder, container, mainTitle } = styles;
  return (
    <View style={container}>
      <Text style={mainTitle}>Code Samples</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={sampleHolder}

      >
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: '80%',
    height: '80%',
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: 'blue'
  },
  mainTitle: {
    color: "white",
  },
  sampleHolder: {
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    overflow:'scroll',
    flexGrow: 1
  },
  sample: {
    height: 200,
    width: '100%',
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkPane;
