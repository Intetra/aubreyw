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
  const { contentContainer, scrollView, topTitle, border } = styles;
  return (
    <View style={border}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={contentContainer}
        style={scrollView}
      >
        <Text style={topTitle}>Code Samples</Text>
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
        <Sample />
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
  border: {
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'white',
    position: 'absolute',
    height: '80%',
    width: '80%',
    maxWidth: 500,
    maxHeight: 500,
    padding: 10
  },
  scrollView: {
    height: 500,


  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  sample: {
    height: 450,
    width: 450,
    maxWidth: '100%',
    maxHeight: '100%',
    backgroundColor: "white",
    borderRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  topTitle: {
    color: 'white',
    margin: 20
  }
});

export default WorkPane;
